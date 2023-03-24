const express=require("express");
const userTask = require("../models/taskModel");

const app = express.Router();

  app.get('/:assignee', async (req, res) => {
    const tasks = await userTask.find({ assignee: req.params.assignee });
    res.send(tasks);
  });

  app.get('/', async (req, res) => {
    const tasks = await userTask.find();
    res.send(tasks);
  });

  module.exports=app;