# CI/CD Setup Guide (VM-based) - Office X

Hệ thống CI/CD cho kiến trúc VM (EC2 + Auto Scaling) sử dụng **GitHub Actions** kết hợp **AWS CodeDeploy**.

## 1. Kiến trúc Pipeline
1.  **GitHub Actions:** Checkout code -> Build -> Zip Artifact -> Upload S3.
2.  **AWS CodeDeploy:** Trigger deployment -> Pull Zip từ S3 -> Deploy lên các Instance trong ASG (In-place hoặc Blue/Green).

---

## 2. Chuẩn bị (Prerequisites)
*   **AppSpec File (`appspec.yml`):** File quy định các bước deploy (Stop app, Copy file, Start app).
*   **CodeDeploy Agent:** Phải được cài sẵn trên EC2 (có trong Golden AMI).

### Ví dụ `appspec.yml` (đặt tại root folder)
```yaml
version: 0.0
os: linux
files:
  - source: /
    destination: /var/www/officex
hooks:
  BeforeInstall:
    - location: scripts/cleanup.sh
      timeout: 300
  AfterInstall:
    - location: scripts/install_dependencies.sh
      timeout: 300
  ApplicationStart:
    - location: scripts/start_app.sh
      timeout: 300
  ValidateService:
    - location: scripts/health_check.sh
      timeout: 300
```

---

## 3. GitHub Secrets
| Secret Name | Mô tả |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | Access Key |
| `AWS_SECRET_ACCESS_KEY` | Secret Key |
| `AWS_REGION` | `ap-northeast-1` |
| `S3_BUCKET_NAME` | Bucket chứa Artifact (ví dụ: `officex-deploy-artifacts`) |
| `CODEDEPLOY_APP_NAME` | Tên App trong CodeDeploy |
| `CODEDEPLOY_GROUP_NAME` | Tên Deployment Group (gắn với ASG) |

---

## 4. Workflow Details (`ec2-deploy.yml`)

```yaml
name: EC2 Deployment

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Dependencies & Build
        run: |
          npm ci
          npm run build
          # Xóa node_modules để giảm size zip (sẽ install lại trên server) hoặc giữ lại nếu muốn build on CI
          rm -rf node_modules 

      - name: Zip Artifact
        run: zip -r deploy-package.zip .

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Upload to S3
        run: |
          aws s3 cp deploy-package.zip s3://${{ secrets.S3_BUCKET_NAME }}/deploy-${{ github.sha }}.zip

      - name: Create CodeDeploy Deployment
        run: |
          aws deploy create-deployment \
            --application-name ${{ secrets.CODEDEPLOY_APP_NAME }} \
            --deployment-group-name ${{ secrets.CODEDEPLOY_GROUP_NAME }} \
            --s3-location bucket=${{ secrets.S3_BUCKET_NAME }},key=deploy-${{ github.sha }}.zip,bundleType=zip
```
