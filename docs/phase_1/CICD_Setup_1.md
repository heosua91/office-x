# CI/CD Setup Guide (Hybrid) - Office X

Hệ thống CI/CD cho kiến trúc Hybrid (App Runner + Lambda) sử dụng **GitHub Actions**.

## 1. Kiến trúc Pipeline
*   **Web/API (App Runner):** Build Docker Image -> Push ECR -> App Runner tự động Deploy (hoặc trigger manual).
*   **AI Worker (Lambda):** Zip code -> Update Function Code (hoặc deploy qua Serverless Framework).

---

## 2. GitHub Secrets
Cần cấu hình các biến sau trong Settings -> Secrets:

| Secret Name | Mô tả |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | Access Key deployer |
| `AWS_SECRET_ACCESS_KEY` | Secret Key deployer |
| `AWS_REGION` | `ap-northeast-1` |
| `ECR_REPOSITORY` | Tên ECR Repo cho Web App |
| `APP_RUNNER_SERVICE_ARN` | ARN của App Runner Service |
| `LAMBDA_FUNCTION_NAME` | Tên Lambda Function xử lý AI |

---

## 3. Workflow Details

### 3.1. Web App Pipeline (`web-deploy.yml`)
Khi code merge vào `main`, pipeline sẽ build docker và yêu cầu App Runner cập nhật.

```yaml
name: Web App Deploy

on:
  push:
    branches: [ "main" ]
    paths:
      - 'app/**' # Chỉ chạy khi code App thay đổi

jobs:
  build-and-deploy:
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
          docker build -t $ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:latest .
          docker push $ECR_REGISTRY/${{ secrets.ECR_REPOSITORY }}:latest
          
      # App Runner nếu bật "Auto Deployment" thì không cần bước này. 
      # Nếu tắt Auto để kiểm soát thủ công, dùng lệnh sau:
      - name: Deploy to App Runner
        run: |
          aws apprunner start-deployment \
            --service-arn ${{ secrets.APP_RUNNER_SERVICE_ARN }}
```

### 3.2. Lambda Worker Pipeline (`worker-deploy.yml`)
Deploy code mới cho AI Worker.

```yaml
name: Lambda Worker Deploy

on:
  push:
    branches: [ "main" ]
    paths:
      - 'worker/**'

jobs:
  deploy-lambda:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install Dependencies & Build
        run: |
          cd worker
          npm ci
          npm run build # (Nếu dùng TS)
          zip -r function.zip .
          
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Update Lambda Code
        run: |
          aws lambda update-function-code \
            --function-name ${{ secrets.LAMBDA_FUNCTION_NAME }} \
            --zip-file fileb://worker/function.zip
```
