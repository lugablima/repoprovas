<h1 align = "center"> Repoprovas </h1>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Lucas_Gabriel_Lima-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lugablima/repoprovas?color=4dae71&style=flat-square" />
</p>

## Tecnologias

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px" alt="Node.js" />  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px" alt="Express.js"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px" alt="PostgreSQL" />
  <img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white" height="30px" />
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

##  :clipboard: Description

O RepoProvas é um sistema de compartilhamento de avaliações entre alunos, possibilitando o cadastro e login dos usuários, a adição de uma nova avaliação e a busca de avaliações por disciplinas ou professores.

## :computer: Features

- Realizar cadastro;
- Realizar login;
- Adicionar uma nova avaliação;
- Buscar avaliações por disciplinas;
- Buscar avaliações por professores.

## :rocket: Routes

### Realizar cadastro

```http
POST /signup
```

#### Request:

| Body             | Tipo      | Descrição                          |
| :----------------| :-------- | :--------------------------------- |
| `email`          | `string`  | **Obrigatório**. E-mail do usuário.|
| `password`       | `string`  | **Obrigatório**. Senha do usuário. |
| `repeatPassword` | `string`  | **Obrigatório**. Senha do usuário. |

### Realizar login

```http
POST /signin
```

#### Request:

| Body             | Tipo      | Descrição                          |
| :----------------| :-------- | :--------------------------------- |
| `email`          | `string`  | **Obrigatório**. E-mail do usuário.|
| `password`       | `string`  | **Obrigatório**. Senha do usuário. |

#### Response:

```json
{
  "token": 11111111111
}
```

### Adicionar uma nova avaliação

```http
POST /tests
```

#### Request:

| Headers         | Tipo     | Descrição                          |
| :-------------- | :------- | :--------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Token do usuário. |

`O header Authorization deve ter o seguinte formato: Bearer token_do_usuário`

| Body             | Tipo     | Descrição                                                |
| :--------------- | :------- | :------------------------------------------------------- |
| `name`           | `string` | **Obrigatório**. Título da avaliação.                    |
| `pdfUrl`         | `string` | **Obrigatório**. Url válida do arquivo pdf da avaliação. |
| `categoryName`   | `string` | **Obrigatório**. Nome da categoria.                      |
| `disciplineName` | `string` | **Obrigatório**. Nome da disciplina.                     |
| `teacherName`    | `string` | **Obrigatório**. NOme do professor.                      |

### Buscar avaliações por disciplinas

```http
GET /tests/disciplines
```

#### Request:

| Headers         | Tipo     | Descrição                          |
| :-------------- | :------- | :--------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Token do usuário. |

`O header Authorization deve ter o seguinte formato: Bearer token_do_usuário`

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

### Buscar avaliações por professores

```http
GET /tests/teachers
```

#### Request:

| Headers         | Tipo     | Descrição                          |
| :-------------- | :------- | :--------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Token do usuário. |

`O header Authorization deve ter o seguinte formato: Bearer token_do_usuário`

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

## Variáveis de ambiente

Para rodar este projeto, você precisará adicionar as seguintes variáveis de ambiente ao seu arquivo *.env*:

`PORT = número` `Recomendado: 5000`

`DATABASE_URL = postgres://nomeDeUsuário:senha@nomeDoServidor:5432/nomeDoBancoDeDados`

`JWT_SECRET = qualquer string`  

## 🏁 Rodando a aplicação localmente

Clone o projeto

```bash
  git clone https://github.com/lugablima/repoprovas.git
```

Vá para a pasta onde está o projeto

```bash
  cd repoprovas/
```

Instale as dependências do projeto

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

## Deploy da aplicação

Se preferir, é possível testar a aplicação por meio de um REST API Client (Insomnia, Postman, Thunder Client, etc) e acessando o link de deploy da mesma:

<a href="https://repoprovas.up.railway.app" target="_blank">https://repoprovas.up.railway.app</a>
