const bcrypt = require("bcrypt");

module.exports.generateCrypt = function generateCrypt(data) {
	return bcrypt.hashSync(data, bcrypt.genSaltSync(10));
};

module.exports.compareCrypt = function compareCrypt(data, crypt) {
	return bcrypt.compareSync(data, crypt);
};
