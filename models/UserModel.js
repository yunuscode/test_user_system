module.exports = function (Sequelize, sequelize) {
	return sequelize.define("users", {
		user_id: {
			type: Sequelize.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
			allowNull: true,
		},
		user_email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		user_password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});
};
