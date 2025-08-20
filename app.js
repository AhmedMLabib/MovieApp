const connectDB = require("./config/db.config");

connectDB();
const express = require("express");
const app = express();

app.use("/images", express.static("./images"));

