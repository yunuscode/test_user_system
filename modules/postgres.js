const { Sequelize } = require("sequelize");
const UserModel = require("../models/UserModel");

const sequelize = new Sequelize(process.env.SQL_CONNECTION_STRING, {
	logging: false,
});

async function postgres() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.users = await UserModel(Sequelize, sequelize);

		await sequelize.sync({ force: false });

		return db;
	} catch (error) {
		console.log("SQL_ERROR", error);
	}
}

module.exports = postgres;
