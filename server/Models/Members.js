const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member;