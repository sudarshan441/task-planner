const express=require("express");
const userTask = require("../models/taskModel");

const app = express.Router();

app.get('/users/:id/tasks', async (req, res) => {
  const tasks = await userTask.find({ assignee: req.params.id }).populate('assignee');
  res.json(tasks);
});
   app.get('/', async (req, res) => {
    const tasks = await userTask.find();
    res.send(tasks);
  });
  app.patch('/tasks/:id', async (req, res) => {
    const { assignee, status } = req.body;
    const task = await userTask.findByIdAndUpdate(req.params.id, { assignee, status }, { new: true });
    res.json(task);
  });

  module.exports=app;