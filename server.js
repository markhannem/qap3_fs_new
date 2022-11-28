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
app.use("/css", express.static(path.resolve(__dirname, "assests/css")));
app.use("/img", express.static(path.resolve(__dirname, "assests/img")));
app.use("/js", express.static(path.resolve(__dirname, "assests/js")));

// log
app.use(morgan("tiny"));

// body-parser
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("Testing Server");
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
