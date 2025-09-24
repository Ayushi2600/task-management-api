## Task Manager API

A Task Management REST API built with Node.js, Express, PostgreSQL, Prisma, and JWT authentication.
This project demonstrates clean architecture with controllers, services, and middleware, following best practices for real-world backend development.

## Features

# Authentication & Authorization
User signup/login with JWT
Protected routes using middleware

# Task Management
Create, Read, Update, Delete (CRUD) tasks
Filtering tasks by status (pending, completed, etc.)
Each task is tied to a specific authenticated user

# Best Practices
MVC structure (routes/, controllers/, services/)
Prisma ORM with PostgreSQL
Environment variables (.env) for secrets & DB config

## Tech Stack

Backend: Node.js, Express
Database: PostgreSQL + Prisma ORM
Authentication: JWT (JSON Web Tokens)

## Project Structure
```
task-manager-api/
│── auth/
│   ├── controllers/
│   ├── routes/
│   └── services/
│
│── task/
│   ├── controllers/
│   ├── routes/
│   └── services/
│
│── middleware/
│   └── auth.js
│
│── prisma/
│   ├── schema.prisma
│
│── server.js
│── package.json
│── .env
```
## Setup & Installation

Clone the repository:
```
git clone https://github.com/Ayushi2600/task-management-api.git
cd task-management-api
```

Install dependencies:
```
npm install
```

Set up PostgreSQL & Prisma:
Create a database in PostgreSQL
Configure .env file:
```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mydb?schema=public"
JWT_SECRET="your_jwt_secret"
```

Run Prisma migrations:
```
npx prisma migrate dev --name init
```

Start the server:
```
node server.js
```

## API Endpoints
Auth Routes (/api/auth)

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | `/signup`      | Register a user   |
| POST   | `/login`       | Login & get token |
| GET    | `/profile/:id` | Get user profile  |

## Task Routes (/api/tasks)
Requires Authorization: Bearer <token> header

| Method | Endpoint   | Description                      |
| ------ | ---------- | -------------------------------- |
| POST   | `/`        | Create a new task                |
| GET    | `/`        | Get all tasks for logged-in user |
| GET    | `/:taskId` | Get a single task by ID          |
| PUT    | `/:taskId` | Update task by ID                |
| DELETE | `/:taskId` | Delete task by ID                |


## Author
Developed by Ayushi
Feel free to connect and collaborate!

Tools: Postman, Cors
