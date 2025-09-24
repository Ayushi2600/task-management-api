import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTaskService = async ({
  title,
  description,
  status,
  userId,
}) => {
  const newTask = await prisma.task.create({
    data: { title, description, status, userId: parseInt(userId) },
  });
  return newTask;
};

export const getTasksService = async (userId, status) => {
  const filter = { userId: parseInt(userId) };
  if (status) filter.status = status;

  const tasks = await prisma.task.findMany({
    where: filter,
    orderBy: { createdAt: "desc" },
  });
  return tasks;
};

export const getTaskByIdService = async (taskId) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(taskId) },
  });

  if (!task) throw new Error("Task not found");
  return task;
};

export const updateTaskService = async (taskId, data) => {
  const updatedTask = await prisma.task.update({
    where: { id: parseInt(taskId) },
    data,
  });
  return updatedTask;
};

export const deleteTaskService = async (taskId) => {
  const deleteTask = await prisma.task.delete({
    where: { id: parseInt(taskId) },
  });
  return deleteTask;
};
