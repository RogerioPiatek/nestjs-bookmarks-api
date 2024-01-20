<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NestJS Bookmarks API 📚

This project is a RESTful API for managing bookmarks using [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications.

## Features ✨

- CRUD operations for bookmarks
- JWT authentication and authorization
- Validation and error handling
- Pagination and filtering
- Docker support

## Tech Stack 🛠️

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Passport](http://www.passportjs.org/)
- [Jest](https://jestjs.io/)

## Getting Started 🚀

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 14)
- [bun](https://bun.sh/) OR [npm](https://www.npmjs.com/) (>= 6)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional)

### Installation

1. Clone the repository

```bash
git clone https://github.com/RogerioPiatek/nestjs-bookmarks-api.git
```

2. Install the dependencies

```bash
cd nestjs-bookmarks-api
bun install
```

3. Copy the `.env.example` file and rename it to `.env`

```bash
cp .env.example .env
```

4. Update the environment variables in the `.env` file according to your preferences

```bash
# Application port
PORT=3000

# Database connection
DATABASE_URL=""

# JWT secret
JWT_SECRET="secret"
```

5. Run the database migrations

```bash
bunx prisma migrate dev
```

6. Start the application

```bash
# development mode
bun start:dev
```

Alternatively, you can use Docker to run the application and the database with one command

```bash
docker-compose up -d
```

## Usage 📝
You can use any HTTP client to interact with the API, such as [Postman](https://www.postman.com/) or [curl](https://curl.se/).

Here are some examples of requests and responses:

### Create a user and get a JWT token

Request:

```bash
curl --location --request POST 'http://localhost:3000/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "test",
    "password": "test123"
}'
```

Response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidGVzdCIsImlhdCI6MTYyOTg0MjQwNCwiZXhwIjoxNjI5ODQ2MDA0fQ.8dU1FpHwNq2xSdPQxPZLxYw2l2xv0n3a4SNZ4lH8KfE"
}
```

### Login and get a JWT token

Request:

```bash
curl --location --request POST 'http://localhost:3000/auth/signin' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "test",
    "password": "test123"
}'
```

Response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidGVzdCIsImlhdCI6MTYyOTg0MjQwNCwiZXhwIjoxNjI5ODQ2MDA0fQ.8dU1FpHwNq2xSdPQxPZLxYw2l2xv0n3a4SNZ4lH8KfE"
}
```

### Create a bookmark

Request:

```bash
curl --location --request POST 'http://localhost:3000/bookmarks' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <access_token>' \
--data-raw '{
    "title": "NestJS",
    "link": "https://nestjs.com/"
}'
```

Response:

```json
{
  "id": 1,
  "createdAt": "2024-01-20T06:24:53.455Z",
  "updatedAt": "2024-01-20T06:24:53.455Z",
  "title": "NestJS",
  "description": null,
  "link": "https://nestjs.com/",
  "userId": 1
}
```

### Get bookmark by id

Request:

```bash
curl --location --request GET 'http://localhost:3000/bookmarks/1' \
--header 'Authorization: Bearer <access_token>'
```

Response:

```json
{
  "id": 1,
  "createdAt": "2024-01-20T06:26:53.455Z",
  "updatedAt": "2024-01-20T06:26:37.583Z",
  "title": "NestJS",
  "description": null,
  "link": "https://nestjs.com/",
  "userId": 1
}
```

#### And other CRUD operations!

## Contributing 🤝

Contributions, issues, and feature requests are welcome. Feel free to check the [issues](https://github.com/RogerioPiatek/nestjs-bookmarks-api/issues) page if you want to contribute.

## License 📄

This project is licensed under the MIT License. Nest is MIT Licensed.
