import pool from "../database/database.js";
import db from "../database/database.js";

const create = async (title, description, creationDate) => {
  const result = await pool.query(
    `
      INSERT INTO tasks (
        title,
        description,
        completed,
        creation_date
      )
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `,
    [title, description, false, creationDate],
  );

  return result.rows[0].id;
};

const findAll = async () => {
  const result = await pool.query(`
    SELECT *
    FROM tasks
    ORDER BY id
  `);

  return result.rows;
};

const findById = async (id) => {
  const result = await pool.query(
    `
      SELECT *
      FROM tasks
      WHERE id = $1
    `,
    [id],
  );

  return result.rows[0];
};

const deleteById = async (id) => {
  const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);

  return result.rowCount;
};

const update = async (id, title, description, completed, completionDate) => {
  const result = await pool.query(
    `
      UPDATE tasks
      SET
        title = $1,
        description = $2,
        completed = $3,
        completion_date = $4
      WHERE id = $5
      RETURNING *;
    `,
    [title, description, completed, completionDate, id],
  );

  return result.rows[0];
};

export default {
  create,
  findAll,
  findById,
  deleteById,
  update,
};
