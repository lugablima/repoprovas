# <p align = "center"> Repoprovas </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Lucas_Lima-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lugablima/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>

<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

##  :clipboard: Description

RepoProvas API, a system for sharing tests between students, built with Typescript, Node.js, Express, Prisma and Postgres.

## :computer: Features

- Register a new user;
- Login a user;
- Add a new test;
- View tests by disciplines;
- View tests by teachers.

***

## :rocket: Routes

### Register a new user

```http
POST /signup
```

#### Request:

| Body             | Type      | Description                         |
| :----------------| :-------- | :---------------------------------- |
| `email`          | `string`  | **Required**. User mail.            |
| `password`       | `string`  | **Required**. User password.        |
| `repeatPassword` | `string`  | **Required**. Repeat user password. |

#

### Login a user

```http
POST /signin
```

#### Request:

| Body             | Type      | Description                         |
| :----------------| :-------- | :---------------------------------- |
| `email`          | `string`  | **Required**. User mail.            |
| `password`       | `string`  | **Required**. User password.        |

#### Response:

```json
{
  "token": 11111111111
}
```

#

### Add a new test

```http
POST /tests
```

#### Request:

####

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

####

| Body             | Type     | Description                    |
| :--------------- | :------- | :----------------------------- |
| `name`           | `string` | **Required**. Test name.       |
| `pdfUrl`         | `string` | **Required**. Valid pdf url.   |
| `categoryName`   | `string` | **Required**. Category name.   |
| `disciplineName` | `string` | **Required**. Discipline name. |
| `teacherName`    | `string` | **Required**. Teacher name.    |

#

### View tests by discipline

```http
GET /tests/disciplines
```

#### Request:

####

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#### Response

```json
[
  {
    "id": 1,
    "number": 1,
    "disciplines": [
      {
        "id": 1,
        "name": "Discipline name",
        "categories": [
          {
            "id": 1,
            "name": "Category name",
            "tests": [
              {
                "id": 1,
                "name": "Test name",
                "pdfUrl": "https://...",
                "teacher": {
                  "id": 1,
                  "name": "Teacher name",
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    ...
  }
]
```

#

### View tests by teacher

```http
GET /tests/teachers
```

#### Request:

####

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. User token. |

`The Authorization field must have the following format: Bearer ${token}`

#### Response

```json
[
  {
    "id": 1,
    "name": "Teacher name",
    "categories": [
      {
        "id": 1,
        "name": "Category name",
        "tests": [
          {
            "id": 1,
            "name": "Test name",
            "pdfUrl": "https://...",
            "discipline": {
                "id": 1,
                "name": "Discipline name",
            }
          }
        ]
      }
    ]
  },
  {
    ...
  }
]
```

***

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT = number` `Recommended:5000`

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`JWT_SECRET = any string`  

## 🏁 Run Locally

Clone the project

```bash
  git clone https://github.com/lugablima/projeto20-repoprovas
```

Go to the project directory

```bash
  cd projeto20-repoprovas/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

`The API deploy link is: https://back-projeto20-repoprovas.herokuapp.com/`
