const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

const getPayload = (token) => {
	console.log("token ***11***------>>>>>>", token);

	if (token) {
		try {
			const payload = jwt.verify(token, "sUpeRsEcReT");
			console.log("payload ******------>>>>>>", payload);

			return payload;
		} catch (err) {
			console.log("err ******------>>>>>>", err);

			throw new AuthenticationError(err, "Unable To Verify Token");
		}
	}
};

module.exports = { getPayload };
