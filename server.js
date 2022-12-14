const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require("./server/db/connection");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 3000;

// log
app.use(morgan("tiny"));

//mongodb connection
connectDB();

// body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname), "views/ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// loading routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
