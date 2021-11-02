const nodemailer = require("nodemailer");

module.exports.sendEmail = async function sendEmail(text, email) {
	const transport = nodemailer.createTransport({
		host: "smtp.mail.ru",
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.MAIL_ADDRESS, // generated ethereal user
			pass: process.env.MAIL_PASSWORD, // generated ethereal password
		},
	});

	let info = await transport.sendMail({
		from: '"Muhammadyunusuz 👻" <muhammadyunusuz@mail.ru>', // sender address
		to: email, // list of receivers
		subject: "Please verificate your account", // Subject line
		text: text, // plain text body
	});

	return info;
};
