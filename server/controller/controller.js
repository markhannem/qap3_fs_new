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
        message: err.message || "An error occurred creating employee entry",
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
exports.find = (req, res) => {
  // fetch a single employee
  if (req.query.id) {
    const id = req.query.id;

    Employeedb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "User not found with the id:" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving employee with id" + id });
      });
  } else {
    // fetch all employees
    Employeedb.find()
      .then((employee) => {
        res.send(employee);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message: err.message || "An error occurred finding employee",
          });
      });
  }
};

// update by employee id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Update field cannot be empty" });
  }

  const id = req.params.id;
  Employeedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Employee:${id} cannot be updated` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating employee information" });
    });
};

// delete an employee
exports.delete = (req, res) => {
  const id = req.params.id;

  Employeedb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot delete employee ${id}. Please check id` });
      } else {
        res.send({
          message: "Employee was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Cannot delete employee" + id,
      });
    });
};
