import express from "express";
import {
  createTask,
  listTasks,
  getTaskById,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", listTasks);
router.get("/tasks/:id", getTaskById);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);

export default router;
