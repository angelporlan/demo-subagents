import express from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
