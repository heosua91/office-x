# CI/CD Setup Guide - Office X

## 1. Tổng quan Pipeline
Hệ thống sử dụng **GitHub Actions** để tự động hóa quy trình tích hợp và triển khai.
Pipeline chia thành 2 luồng chính:
*   **CI (Continuous Integration):** Chạy khi có `Push` hoặc `Pull Request` vào nhánh `develop` / `main`.
*   **CD (Continuous Deployment):** Chạy khi `Push` vào nhánh `main` (Production) hoặc `staging` (Staging).

---

## 2. Cấu hình GitHub Repository

### 2.1. Environments
Tạo 2 Environments trong Settings -> Environments của Repository:
*   `staging`: Cho môi trường kiểm thử.
*   `production`: Cho môi trường thật (có thể bật "Required reviewers" để duyệt deploy thủ công).

### 2.2. Secrets & Variables
Cần cấu hình các biến môi trường bảo mật trong **Settings -> Secrets and variables -> Actions**:

| Secret Name | Mô tả |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | Access Key của IAM User dùng cho CI/CD |
| `AWS_SECRET_ACCESS_KEY` | Secret Key tương ứng |
| `AWS_REGION` | Vùng AWS (ví dụ: `ap-northeast-1`) |
| `ECR_REPOSITORY` | Tên ECR Repository chứa Docker image |
| `EKS_CLUSTER_NAME` | Tên EKS Cluster |
| `DATABASE_URL` | (Optional) URL kết nối DB để chạy Migration (nếu cần) |
| `SONAR_TOKEN` | Token kết nối SonarQube (nếu check code quality) |

---

## 3. Chi tiết Workflow (`.github/workflows/`)

### 3.1. Build & Test (`ci.yml`)
Quy trình kiểm tra chất lượng code và build artifact.

```yaml
name: CI Pipeline

on:
  pull_request:
    branches: [ "develop", "main" ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install Dependencies
        run: npm ci
      - name: Run Lint
        run: npm run lint
      - name: Run Units Test
        run: npm run test
      
  build-push:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2
      - name: Build, tag, and push image to Amazon ECR
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:$IMAGE_TAG .
          docker push $ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:$IMAGE_TAG
```

### 3.2. Deploy (`cd.yml`)
Quy trình triển khai Kubernetes Manifests.

```yaml
name: Deploy to EKS

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - name: Update Kubeconfig
        run: aws eks update-kubeconfig --name ${{ secrets.EKS_CLUSTER_NAME }} --region ${{ secrets.AWS_REGION }}
      - name: Deploy to EKS
        env:
          ECR_REGISTRY: ${{ secrets.ECR_REGISTRY_URL }} # Cần lấy URL từ bước login hoặc biến tĩnh
          IMAGE_TAG: ${{ github.sha }}
        run: |
          # Thay thế image tag trong file k8s deployment.yaml bằng `envsubst` hoặc `kustomize`
          cd k8s
          kustomize edit set image web-app=$ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:$IMAGE_TAG
          kustomize build . | kubectl apply -f -
      - name: Verify Deployment
        run: kubectl rollout status deployment/web-app-deployment
```

---

## 4. Chiến lược Branching (Git Flow)

*   `main`: Code đang chạy trên Production (Stable). Cấm push trực tiếp.
*   `develop`: Nhánh tích hợp chính. Deploy lên môi trường Staging.
*   `feature/*`: Nhánh tính năng. Merge vào `develop` qua Pull Request (PR).
*   `hotfix/*`: Nhánh sửa lỗi gấp cho Production. Merge vào `main` và `develop`.

---

## 5. Rollback (Khôi phục)
Khi deploy gặp lỗi, thực hiện rollback nhanh bằng Github Actions:
1.  Vào tab Actions trên Github Repo.
2.  Chọn Workflow deploy thành công gần nhất.
3.  Re-run jobs để deploy lại phiên bản cũ (hoặc sử dụng tính năng Rollback của Helm nếu dùng Helm Chart).
