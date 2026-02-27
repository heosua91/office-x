# OfficeX API

## Install

### Prerequisites

- Install [Bun](https://bun.sh/docs): JavaScript runtime and package manager
- Install [Docker](https://www.docker.com/get-started) and Docker Compose: For running PostgreSQL and Redis

### Setup Steps

1. **Install dependencies**
    ```bash
    bun install
    ```

2. **Start Docker services** (PostgreSQL and Redis)
    ```bash
    docker-compose up -d
    ```
    This will start:
    - PostgreSQL database on port `5432`
    - Redis on port `6379`
    - Bull Board (queue dashboard) on port `4000`

3. **Create `.env` file**
    Create a `.env` file in the root directory with the following variables:
    ```env
    # Database
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/officex_db"
    DIRECT_DATABASE_URL="postgresql://postgres:postgres@localhost:5432/officex_db"

    # Application
    APP_NAME="OfficeX API"
    APP_ENV="development"
    APP_PORT="3000"
    APP_TIMEZONE="Asia/Tokyo"
    APP_URL="http://localhost:3000"

    # Swagger
    ENABLE_SWAGGER="true"
    BASIC_AUTH_USERNAME="admin"
    BASIC_AUTH_PASSWORD="password"

    # CORS
    CORS_ENABLED="true"
    CORS_ORIGIN="http://localhost:3000"

    # Redis
    REDIS_HOST="localhost"
    REDIS_PORT="6379"
    REDIS_USERNAME=""
    REDIS_PASSWORD=""

    # Cache
    CACHE_ENABLED="true"

    # JWT Authentication
    AUTH_JWT_PRIVATE_KEY_PATH="./keys/private.pem"
    AUTH_JWT_PUBLIC_KEY_PATH="./keys/public.pem"
    AUTH_JWT_ACCESS_TOKEN_EXPIRED="15m"
    AUTH_PASSWORD_EXPIRATION_DAYS="60"

    # Internal API
    INTERNAL_API_WHITELIST=""
    INTERNAL_API_KEY=""
    ```

4. **Run database migrations**
    ```bash
    bun prisma migrate deploy
    ```

5. **Generate Prisma Client**
    ```bash
    bun prisma generate
    ```

6. **Generate JWT key pairs**
    ```bash
    bun run generate:key
    ```
    This will create `./keys/private.pem` and `./keys/public.pem` files.

7. **Update key paths in `.env` file** (if different from default)
    Ensure `AUTH_JWT_PRIVATE_KEY_PATH` and `AUTH_JWT_PUBLIC_KEY_PATH` point to the correct key files.

8. **Run database seed** (optional, for initial data)
    ```bash
    bun prisma db seed
    ```

9. **Start the application**
    ```bash
    # Development mode
    bun run start:dev

    # Production mode
    bun run build
    bun run start:prod
    ```

The API will be available at `http://localhost:3000` and Swagger documentation at `http://localhost:3000/docs`.

## Prisma

- Create new migration
    ```bash
    bun prisma migrate dev --name {name}
    ```

- Generate Prisma Client
    ```bash
    bun prisma generate
    ```

- Run seeder
    ```bash
    bun prisma db seed
    ```