import {
  createTaskService,
  getTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService,
} from "../services/taskServices.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const userId = req.user.userId;
    const task = await createTaskService({
      title,
      description,
      status,
      userId
    });
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { userId } = req.user.userId;
    const {status} = req.query;
    const tasks = await getTasksService(userId, status);
    res.status(201).json({ message: "Tasks fetched successfully", tasks });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await getTaskByIdService(taskId);
    res.status(201).json({ message: "Task fetched successfully", task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description, status } = req.body;
    const updatedTask = await updateTaskService(taskId, {
      title,
      description,
      status,
    });
    res.status(201).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const deletedTask = await deleteTaskService(taskId);
    res
      .status(201)
      .json({ message: "Task deleted successfully", deletedTask })
      .send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
