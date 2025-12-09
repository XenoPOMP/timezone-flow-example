# Timezone Flow

This repo shows how to respect date`s timezone using ``dayjs`` library.

## Preview
![PreviewImage](Repo/Media/preview.png)

## Setting up the environment
### **`./timezone-flow-frontend/.env`**
```
# This URL is used for SEO-optimization and providing Open Graph info
CANONICAL_URL="http://localhost:3000"

# This variable should be available in client-side
NEXT_PUBLIC_API_URL="http://localhost:4242"
```

### **`./timezone-flow-backend/.env`**
```
# Database settings (for docker-compose)
PGDATABASE="database"
PGUSER="user"
PGPASSWORD="password"

DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<dbname>?schema=public"

# Set this string to any one
JWT_SECRET="some secret"

# Root domain for your whole app. If backend is placed in subdomain
# "api.example.com", then root domain is .example.com
APP_HOST="localhost"

# CORS will cover this URL as trusted
TRUSTED_FRONTEND_URL="http://localhost:3000"

# dev | prod (Optional)
ENV_MODE="dev"
```

## Run app
```shell
docker compose up
```
_After successful build app will be available at http://localhost:3000_

## Stop the app
```shell
docker compose stop
```
