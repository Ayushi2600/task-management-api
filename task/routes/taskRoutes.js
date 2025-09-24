import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";
import express from "express";
import {authenticateToken} from '../../middleware/auth.js';

const router = express.Router();

router.post("/", authenticateToken, createTask);
router.get("/", authenticateToken, getTasks); 
router.get('/:taskId', getTaskById); 
router.put('/:taskId', updateTask); 
router.delete('/:taskId', deleteTask); 

export default router;
