const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { DEV_URL } = process.env;

const {
  boardsRouter,
  columnsRouter,
  usersRouter,
  tasksRouter,
  emailRouter,
  backgroundsRouter,
} = require("./routers/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const whitelist = ["https://i-kolesnyk.github.io", DEV_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(logger(formatsLogger));
app.use(express.json());

app.use("/api/users", cors(corsOptions), usersRouter);
app.use("/api/boards", cors(corsOptions), boardsRouter);
app.use("/api/columns", cors(corsOptions), columnsRouter);
app.use("/api/tasks", cors(corsOptions), tasksRouter);
app.use("/api/email", cors(corsOptions), emailRouter);
app.use("/api/backgrounds", cors(corsOptions), backgroundsRouter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res
    .status(404)
    .json({ status: "failed", code: 404, data: { message: "Not found" } });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error", code } = err;
  res.status(status).json({ status: "failed", code, data: { message } });
});

module.exports = app;
