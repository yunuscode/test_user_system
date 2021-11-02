const Router = require("express").Router();

Router.use("/users", require("./UserRoute"));

module.exports = Router;
