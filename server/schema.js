const { gql } = require("apollo-server");

const typeDefs = gql`
	type Bike {
		modelCode: String!
		monthCode: String!
		yearCode: String!
		factoryCode: String!
	}

	type Query {
		bike(serialNumber: String!): Bike
	}
`;
//
module.exports = typeDefs;
