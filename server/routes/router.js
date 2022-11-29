const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

// Root - GET
route.get("/", services.homeRoutes);

// Add Employee - GET
route.get("/add-emp", services.add_emp);

// Update Employee - GET
route.get("/update-emp", services.update_emp);

// API
// add new employee
route.post("/api/employees", controller.create);
// fetch employee(s)
route.get("/api/employees", controller.find);
// update by employee id
route.put("/api/employees/:id", controller.update);
// delete an employee
route.delete("/api/employees/:id", controller.delete);

module.exports = route;

// OLD CODE- Nov 26th 2022
// Used callback function before changing it to services/render.js file

// route.get("/", (req, res) => {
//     // res.send("Testing Server");
//     res.render("index");
//   });

// route.get("/add-emp", (req, res) => {
//   res.render("add_emp");
// });

// route.get("/update-emp", (req, res) => {
//   res.render("update_emp");
// });
