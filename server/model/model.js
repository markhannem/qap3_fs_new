const mongoose = require("mongoose");

var schema = new mongoose.Schema({
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
// var schema = new mongoose.Schema({
//   name: String,
//   job: String,
//   email: String,
//   status: String,
// });

// ERROR: had error on backend in POSTMAN, where it was not letting me POST the data saying validation failed and path was required

// ERROR FIX: sometimes in POSTMAN if you get error validation failed you may need to delete values and try again. IDK but it worked

const Employeedb = mongoose.model("employeedb", schema);

module.exports = Employeedb;
