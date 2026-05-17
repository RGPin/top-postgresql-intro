const express = require("express");
const controller = require("../controllers/indexController");

const indexRouter = express.Router();

indexRouter.get("/", controller.getUsernames);
indexRouter.get("/new", controller.createUsernameGet);
indexRouter.post("/new", controller.createUsernamePost);
indexRouter.get("/search", controller.searchUsername);

module.exports = indexRouter;
