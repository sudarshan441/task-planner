const express=require("express");
const sprintModel = require("../models/sprintModel");
const taskModel = require("../models/taskModel");

const app = express.Router();

app.get('/:sprintId/tasks', async (req, res) => {
    const tasks = await taskModel.find({ sprintId: req.params.sprintId });
    res.send(tasks);
  });

app.post('/', async (req, res) => {
    const sprint = new sprintModel({
      name: req.body.name,
    });
    await sprint.save();
    res.send(sprint)
  });
app.get('/', async (req, res) => {
   const sprint = await sprintModel.find({});
   res.send(sprint)
  });

app.post('/:sprintId/tasks', async (req, res) => {
    const { title, type, status, assignee } = req.body;
    console.log(req.params)
    const task = new taskModel({ title,type, status, assignee, sprintId: req.params.sprintId });
    await task.save();
    const sprint = await sprintModel.findByIdAndUpdate({_id:req.params.sprintId}, { $push: { tasks: task._id } }, { new: true });
    res.json(sprint);
  });
  

 module.exports=app;