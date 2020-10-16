const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const getPayload = (token) => {
	if (token) {
		try {
			const payload = jwt.verify(token, "sUpeRsEcReT");
			return payload;
		} catch (err) {
			throw new AuthenticationError(err, "Unable To Verify Token");
		}
	}
};

module.exports = { getPayload };
