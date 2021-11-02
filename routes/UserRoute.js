const {
	UserSignUpPostController,
	UserVerifyAccountByLinkController,
} = require("../controllers/UserController");

const Router = require("express").Router();

Router.post("/account", UserSignUpPostController);
Router.get("/verify/:verify_id", UserVerifyAccountByLinkController);

module.exports = Router;
