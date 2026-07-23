import pool from "./database.js";

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT FALSE,
        creation_date TIMESTAMP NOT NULL,
        completion_date TIMESTAMP
      );
    `);

    console.log("Tabela 'tasks' criada ou já existente.");
  } catch (err) {
    console.error("Erro ao criar tabela:", err.message);
  }
};

export default createTables;