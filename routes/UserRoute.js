const { UserSignUpPostController } = require("../controllers/UserController");

const Router = require("express").Router();

Router.post("/account", UserSignUpPostController);

module.exports = Router;
