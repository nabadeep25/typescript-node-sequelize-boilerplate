# Typescript-Node-Sequelize-Boilerplate

A boilerplate/starter project for quickly building RESTful APIs using Node.js,Typescript, Express, and Sequelize.


- Node 
- Typescript
- Express
- Sequelize (Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server etc.)

## Link to NPM
 [@nabadeep25/create-ts-node-app](https://www.npmjs.com/package/@nabadeep25/create-ts-node-app)

## Table of Contents

- [Typescript-Node-Sequelize-Boilerplate](#typescript-node-sequelize-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Quick start](#quick-start)
  - [Manual Installation](#manual-installation)
  - [Getting started](#getting-started)
  - [For development](#for-development)
  - [Docker Setup](#docker-setup)
    - [Using Docker Compose (Recommended)](#using-docker-compose-recommended)
    - [Using Docker Only](#using-docker-only)
  - [Sample .ENV](#sample-env)
  - [Commands](#commands)
  - [Project Structure](#project-structure)
  - [API Documentation](#api-documentation)
    - [API Endpoints](#api-endpoints)
  - [Inspirations](#inspirations)



## Quick start

create boillerplate with single command

```sh
 npx  @nabadeep25/create-ts-node-app myapp

```



## Manual Installation

steps:

Clone the repo:

```sh
git clone --depth 1 https://github.com/nabadeep25/typescript-node-sequelize-boilerplate.git  foldername

cd folder name
npx rimraf ./.git
```

Install the dependencies:

```sh
npm install
```

Set the environment variables:

```sh
cp .env.example .env

```
## Getting started

```sh
npm install

npm run build-ts

npm start

```

## For development

```sh
npm install

npm run dev

```

## Docker Setup

### Using Docker Compose (Recommended)

The easiest way to run the application with Docker is using Docker Compose, which will set up both the Node.js application and PostgreSQL database.

1. **Create a `.env` file** in the project root:

```bash
# Database Configuration
DB_HOST=postgres
DB_PORT=5432
DB_TYPE=postgres
DB_NAME=myapp
DB_USER=postgres
DB_PASSWORD=password

# JWT Configuration
SECRET=your-secret-key-change-this-in-production
TOKEN_EXPIRY_HOUR=24

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
EMAIL_FROM=your-email@gmail.com

# OTP Configuration
OTP_EXPIRY_MIN=5
OTP_SECRET=your-otp-secret-change-this-in-production
```

2. **Build and run the containers**:

```bash
# Build and start all services
docker compose up --build

# Run in detached mode (background)
docker compose up -d --build

# Stop the services
docker compose down

```

3. **Access the application**:
   - **API**: http://localhost:5000/api/
   - **Swagger Documentation**: http://localhost:5000/api/v1/docs/
   - **Database**: PostgreSQL on localhost:5432

### Using Docker Only

If you prefer to run only the application container and connect to an external database:

1. **Build the Docker image**:

```bash
docker build -t typescript-node-app .
```

2. **Run the container**:

```bash
docker run -p 5000:5000 \
  -e DB_HOST=your-db-host \
  -e DB_PORT=5432 \
  -e DB_TYPE=postgres \
  -e DB_NAME=your-db-name \
  -e DB_USER=your-db-user \
  -e DB_PASSWORD=your-db-password \
  -e SECRET=your-secret-key \
  -e TOKEN_EXPIRY_HOUR=24 \
  -e EMAIL_SERVICE=gmail \
  -e EMAIL_USER=your-email@gmail.com \
  -e EMAIL_PASS=your-email-password \
  -e EMAIL_FROM=your-email@gmail.com \
  -e OTP_EXPIRY_MIN=5 \
  -e OTP_SECRET=your-otp-secret \
  typescript-node-app
```


### Docker Commands

```bash
# Build the image
docker build -t typescript-node-app .

# Run container
docker run -p 5000:5000 typescript-node-app

# Run with environment file
docker run -p 5000:5000 --env-file .env typescript-node-app

# View running containers
docker ps

# View logs
docker logs <container-id>

# Stop container
docker stop <container-id>

```


## Sample .ENV
```sh
DB_HOST=localhost
DB_NAME=name
DB_PASSWORD=password
DB_PORT=3306
DB_TYPE=postgres
DB_USER=username
PORT=5000



TOKEN_EXPIRY_HOUR=168
SECRET=askjfghhwifuhgw

EMAIL_SERVICE=gmail
EMAIL_USER=you@email.com
EMAIL_PASS=fzobeitqjcxklenm
EMAIL_FROM=admin@email.com

OTP_EXPIRY_MIN=10
OTP_SECRET=shgdbnbgw

```




## Commands


```bash
# run in development
npm run dev

# run in production
npm run start

#  lint files
npm run lint

#  format files
npm run format

# Docker commands
docker compose up --build
docker compose down
```




## Project Structure

```
dist\               # js files
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers 
 |--helpers\        # Helper function files
 |--middlewares\    # Custom express middlewares
 |--model\          # Sequelize models 
 |--routes\         # Routes
 |--services\       # Service 
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.ts\         # Express app
 |--server.ts\      # App entry point
docker-compose.yml  # Docker Compose configuration
Dockerfile          # Docker image definition
.env                # Environment variables
```
## Changing Database

### step 1
 
 ```sh
 # Change the value of  DB_TYPE  in .env file to one of the follwing
 DB_TYPE=postgres 
 DB_TYPE=mysql 
 DB_TYPE=sqlite 
 DB_TYPE=mariadb 
 DB_TYPE=mssql 
 DB_TYPE=db2 
 DB_TYPE=oracle 
 ```
### step 2
```sh
# Install one of the related packge:
 npm install --save pg pg-hstore # for Postgres
 npm install --save mysql2 # for Mysql
 npm install --save mariadb # for Mariadb
 npm install --save sqlite3 # for Sqlite
 npm install --save tedious # for Microsoft SQL Server (mssql)
 npm install --save oracledb # for Oracle 
```
for more details please refer [Sequelize](https://sequelize.org/docs/v6/getting-started/)
## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:5000/api/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**General routes**: <br>
`GET api/` - get server status <br>
`PATCH api/sync` - Sync model with database <br>

**Auth routes**:  <br>
`POST api/v1/auth/register` - register <br>
`POST api/v1/auth/login` - login <br>
`POST api/v1/auth/forgot-password` - send reset password email <br>
`POST api/v1/auth/reset-password` - reset password <br>


**User routes**: <br>
`GET api/v1/user` - get user info <br>
`PATCH api/v1/user` - update user <br>





## Inspirations
- [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)
- [microsoft/typescript-node-starter](https://github.com/microsoft/TypeScript-Node-Starter)





