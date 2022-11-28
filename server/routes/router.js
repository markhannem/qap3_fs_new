const express = require("express");
const route = express.Router();

const services = require("../services/render");

// Root - GET
route.get("/", services.homeRoutes);

// Add Employee - GET
route.get("/add-emp", services.add_emp);

// Update Employee - GET
route.get("/update-emp", services.update_emp);

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

module.exports = route;
