const mongoose = require("mongoose");

var schemea = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: String,
});

const Employeedb = mongoose.model("employeedb", schema);

module.exports = Employeedb;
