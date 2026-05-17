const express = require("express");
const path = require("node:path");

const indexRouter = express.Router();

const publicPath = path.join(__dirname, "..", "public");

indexRouter.get("/", (req, res) => {
  res.send("usernames will be logged here - wip");
});

indexRouter.get("/new", (req, res) => {
  res.sendFile(path.join(publicPath, "form.html"));
});

indexRouter.post("/new", (req, res) => {
  res.send(`username to be saved: ${req.body.username}`);
});

module.exports = indexRouter;
