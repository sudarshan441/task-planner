const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

const userModel = mongoose.model('User', userSchema);

module.exports =userModel;