# CRUD API com Node.js, Express e PostgreSQL

API REST desenvolvida com **Node.js**, **Express** e **PostgreSQL** para gerenciamento de tarefas.

Este projeto foi criado com o objetivo de praticar a integração entre uma API em Node.js e um banco de dados PostgreSQL, realizando operações completas de CRUD (Create, Read, Update e Delete).

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- pg (driver do PostgreSQL)
- Dotenv

---

## 📁 Estrutura do projeto

```
src/
├── controllers/
│   └── taskController.js
├── database/
│   ├── database.js
│   └── createTables.js
├── models/
│   └── taskModel.js
├── routes/
│   └── routesTasks.js
├── validators/
│   └── apiValidator.js
├── server.js
└── .env
```

---

## 📌 Funcionalidades

- Criar uma nova tarefa
- Listar todas as tarefas
- Buscar tarefa por ID
- Atualizar uma tarefa
- Excluir uma tarefa

---

## 📄 Estrutura da tabela

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP NOT NULL,
    completion_date TIMESTAMP
);
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

---

## 🔧 Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=todo_list
DB_USER=postgres
DB_PASSWORD=sua_senha

PORT=3000
```

---

## ▶️ Executando o projeto

Inicie o servidor:

```bash
npm start
```

A API ficará disponível em:

```
http://localhost:3000
```

Na primeira execução a tabela será criada automaticamente caso ainda não exista.

---

## 📬 Endpoints

### Criar tarefa

```
POST /tasks
```

### Listar tarefas

```
GET /tasks
```

### Buscar tarefa por ID

```
GET /tasks/:id
```

### Atualizar tarefa

```
PUT /tasks/:id
```

### Excluir tarefa

```
DELETE /tasks/:id
```

---

## 📚 Objetivos de aprendizado

Este projeto foi desenvolvido para praticar:

- Criação de APIs REST com Express;
- Integração com PostgreSQL utilizando o pacote `pg`;
- Utilização de consultas SQL parametrizadas;
- Operações CRUD completas;
- Organização do projeto em camadas (Routes, Controllers, Models e Validators);
- Uso de variáveis de ambiente com Dotenv;
- Criação automática de tabelas utilizando SQL.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo.