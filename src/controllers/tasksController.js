const tasks = [];
let nextTaskId = 1;

function getTasks(req, res) {
  res.json(tasks);
}

function createTask(req, res) {
  const { title, description = '', status = 'todo' } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }

  const task = {
    id: nextTaskId,
    title,
    description,
    status,
  };

  nextTaskId += 1;
  tasks.push(task);

  return res.status(201).json(task);
}

function updateTask(req, res) {
  const id = Number(req.params.id);
  const task = tasks.find((currentTask) => currentTask.id === id);

  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }

  const { title, description, status } = req.body;

  if (title !== undefined) {
    task.title = title;
  }

  if (description !== undefined) {
    task.description = description;
  }

  if (status !== undefined) {
    task.status = status;
  }

  return res.json(task);
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
};
