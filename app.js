const connectDB = require("./config/db.config");
const port = 3000;

connectDB();
const express = require("express");
const app = express();
const movieRouter = require("./routers/movie.router")

app.use("/images", express.static("./images"));
app.use("/", movieRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})