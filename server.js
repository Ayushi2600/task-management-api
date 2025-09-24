import express from 'express';
import cors from 'cors';
import authRoutes from './auth/routes/authRoutes.js';
import taskRoutes from './task/routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = 4000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)});