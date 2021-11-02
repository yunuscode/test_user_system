const { sendEmail } = require("../modules/email");
const { createToken } = require("../modules/jwt");
const Validations = require("../modules/validations");

module.exports = class UserController {
	static async UserSignUpPostController(req, res, next) {
		try {
			const data = await Validations.SignUpValidation(req.body);

			const user = await req.db.users.create({
				user_email: data.email,
				user_password: data.password,
			});

			await sendEmail(
				`Please click to link: http://localhost/users/verify/${user.dataValues.user_id}`,
				data.email
			);

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
	static async UserVerifyAccountByLinkController(req, res, next) {
		try {
			const user_id = req.params.verify_id;

			const user = await req.db.users.findOne({
				where: {
					user_id,
				},
			});

			if (!user) throw new Error("User not found");

			await req.db.users.update(
				{
					user_is_verified: true,
				},
				{
					where: {
						user_id,
					},
				}
			);

			const token = createToken({
				user_id,
			});

			res.json({
				ok: true,
				message: "Account successfully verificed",
				data: {
					token,
				},
			});
		} catch (error) {
			res.status(400).json({
				ok: false,
				message: error + "",
			});
		}
	}
};
