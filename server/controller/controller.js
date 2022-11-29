var Employeedb = require("../model/model");

// add new employee

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Cannot be Empty" });
    return;
  }

  // new employee
  const Employee = new Employeedb({
    name: req.body.name,
    job: req.body.job,
    email: req.body.email,
    status: req.body.status,
  });

  // save employee to database

  Employee.save(Employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred",
      });
    });
};

// exports.newEmployee = async (req, res) => {
//   try {
//     const { name, job, email, status } = req.body.values;
//     const employee = await new Employeedb({
//       name,
//       job,
//       email,
//       status,
//     }).save();

//     return res.json({ employee, message: "Feedback Created" });
//   } catch (error) {
//     console.log(error.message);
//     res.json("Failed to create feedback!");
//   }
// };

// fetch employee(s)
exports.find = (req, res) => {};

// update by employee id
exports.update = (req, res) => {};

// delete an employee
exports.delete = (req, res) => {};
