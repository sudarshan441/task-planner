const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    type: { type: String, enum: ['bug', 'feature', 'story'] },
    status: { type: String, enum: ['to do', 'in progress', 'done'] },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sprintId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sprint' },
  });

const userTask = mongoose.model('Task', taskSchema);
  module.exports =userTask;