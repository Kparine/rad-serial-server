const { gql } = require("apollo-server");

const typeDefs = gql`
	type Bike {
		modelCode: String!
		monthCode: String!
		yearCode: String!
		factoryCode: String!
		manufYear: String!
		version: String!
		unique: String
	}

	type Query {
		bikes(serialNumber: [String!]): [Bike]
	}
`;

module.exports = typeDefs;
