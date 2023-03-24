const express=require("express");
const sprintModel = require("../models/sprintModel");
const userTask = require("../models/taskModel");

const app = express.Router();

app.get('/:sprintId/tasks', async (req, res) => {
    const tasks = await userTask.find({ sprintId: req.params.sprintId });
    res.send(tasks);
  });

app.post('/', async (req, res) => {
    const sprint = new sprintModel({
      name: req.body.name,
    });
  
    await sprint.save();
    res.send(sprint);
  });

module.exports=app;


app.post('/:sprintId/task', async (req, res) => {
    const task = new userTask({
      title: req.body.title,
      type: req.body.type,
      assignee: req.body.assignee,
      sprintId: req.params.sprintId,
    });
  
    await task.save();
  
    const sprint = await sprintModel.findById(req.params.sprintId);
    sprint.tasks.push(task._id);
    await sprint.save();
  
    res.send(task);
  });
  

 module.exports=app;