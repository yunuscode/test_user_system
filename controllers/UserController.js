const Validations = require("../modules/validations");

module.exports = class UserController {
	static async UserSignUpPostController(req, res, next) {
		try {
			const data = await Validations.SignUpValidation(req.body);

			const user = await req.db.users.create({
				user_email: data.email,
				user_password: data.password,
			});

			console.log(user);

			res.status(201).json({
				ok: true,
				message: "Verification link sent to email",
			});
		} catch (e) {
			res.status(400).json({
				ok: false,
				message: e + "",
			});
		}
	}
};
