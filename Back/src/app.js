const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const mainRouter = require("./routes/mainRouter.js");
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({limit:"50mb"}))
app.use(express.json());
app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;
