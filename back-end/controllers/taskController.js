import taskModel from "../models/taskModel.js";
import { idValidation, titleValidation } from "../validators/api-validators.js";

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    titleValidation(title);

    const creationDate = new Date().toISOString();

    const id = await taskModel.create(title, description, creationDate);

    res.status(201).json({
      mensagem: "Tarefa criada com sucesso",
      id,
    });
  } catch (err) {
    res.status(500).json({
      erro: err.message,
    });
  }
};

const listTasks = async (req, res) => {
  try {
    const tasks = await taskModel.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      erro: err.message,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    idValidation(id);

    const task = await taskModel.findById(id);
    res.json(task);
  } catch (err) {
    res.status(500).json({
      erro: err.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = Number(req.params.id);

    idValidation(id);

    const task = await taskModel.deleteById(id);
    res.json(task);
  } catch (err) {
    res.status(500).json({
      erro: err.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const id = Number(req.params.id);
    idValidation(id);

    const { title, description, conclude } = req.body;
    titleValidation(title);

    const conclusionDate = conclude ? new Date().toISOString() : null;

    const updates = await taskModel.update(
      id,
      title,
      description,
      conclude,
      conclusionDate,
    );
    res.json(updates);
  } catch (err) {
    res.status(500).json({
      erro: err.message,
    });
  }
};

export { createTask, listTasks, getTaskById, deleteTask, updateTask };
