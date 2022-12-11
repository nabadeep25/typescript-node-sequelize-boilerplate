# Typescript-Node-Sequelize-Boilerplate

A boilerplate/starter project for quickly building RESTful APIs using Node.js,Typescript, Express, and Sequelize.


- Node 
- Typescript
- Express
- MySql

## Table of Contents

- [Typescript-Node-Sequelize-Boilerplate](#typescript-node-sequelize-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Quick start](#quick-start)
  - [Manual Installation](#manual-installation)
  - [Getting started](#getting-started)
  - [For development](#for-development)
  - [Sample .ENV](#sample-env)
  - [Commands](#commands)
  - [Project Structure](#project-structure)
  - [API Documentation](#api-documentation)
    - [API Endpoints](#api-endpoints)
  - [Linting](#linting)
  - [Inspirations](#inspirations)



## Quick start

create boillerplate with single command
```
 npx  @nabadeep25/create-ts-node-app myapp

```



## Manual Installation

steps:

Clone the repo:

```
git clone --depth 1 https://github.com/nabadeep25/typescript-node-sequelize-boilerplate.git  foldername

cd folder name
npx rimraf ./.git
```

Install the dependencies:

```
npm install
```

Set the environment variables:

```
cp .env.example .env

```
## Getting started

```
npm install

npm run build-ts

npm start

```

## For development

```
npm install

npm run watch

```

## Sample .ENV
```
DB_HOST=localhost
DB_NAME=name
DB_PASSWORD=password
DB_PORT=3306
DB_TYPE=mysql
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
npm run watch

# run in production
npm run start

#  lint files
npm run lint

#  format files
npm run format

```




## Project Structure

```
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
 |--app.ts          # Express app
 |--server.ts       # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:5000/api/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST api/v1/auth/register` - register\
`POST api/v1/auth/login` - login\
`POST api/v1/auth/forgot-password` - send reset password email\
`POST api/v1/auth/reset-password` - reset password\


**User routes**:\
`GET api/v1/user` - get user info\
`PATCH api/v1/user` - update user\


## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`



## Inspirations
- [hagopj13/node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)
- [microsoft/typescript-node-starter](https://github.com/microsoft/TypeScript-Node-Starter)





