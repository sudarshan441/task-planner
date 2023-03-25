const express=require("express");
const userModel = require("../models/userModel");

const app = express.Router();
app.get('/', async (req, res) => {
    const tasks = await userModel.find({});
    res.send(tasks);
  });

  app.post('/', async (req, res) => {
    const sprint = new userModel({
      name: req.body.name,
    });
  
    await sprint.save();
    res.send(sprint)
  });
  
 module.exports=app;