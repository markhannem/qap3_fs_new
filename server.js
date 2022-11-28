const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 3000;

// view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname), "views/ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// log
app.use(morgan("tiny"));

// body-parser
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("Testing Server");
  res.render("index");
});

app.get("/add-emp", (req, res) => {
  res.render("add_emp");
});

app.get("/update-emp", (req, res) => {
  res.render("update_emp");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
