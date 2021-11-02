const {
	UserSignUpPostController,
	UserVerifyAccountByLinkController,
	UserLoginPostController,
} = require("../controllers/UserController");

const Router = require("express").Router();

Router.post("/account", UserSignUpPostController);
Router.post("/login", UserLoginPostController);
Router.get("/verify/:verify_id", UserVerifyAccountByLinkController);

module.exports = Router;
