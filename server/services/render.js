const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // GET request to /api/employees
  axios
    .get("http://localhost:3000/api/employees")
    .then(function (response) {
      // console log to check if data response is showing up in terminal
      // console.log(response.data);
      res.render("index", { employees: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_emp = (req, res) => {
  res.render("add_emp");
};

exports.update_emp = (req, res) => {
  axios
    .get("http://localhost:3000/api/employees", {
      params: { id: req.query.id },
    })
    .then(function (empdata) {
      res.render("update_emp", { employee: empdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
