const { gql } = require("apollo-server");

const typeDefs = gql`
	type Bike {
		modelCode: [ModelCode!]
		monthCode: [MonthCode!]
		yearCode: [YearCode!]
		factoryCode: [FactoryCode!]
	}

	type ModelCode {
		code: String
	}

	type MonthCode {
		code: String
	}

	type YearCode {
		code: String
	}

	type FactoryCode {
		code: String
	}

	type Query {
		getBikes: [Bike]
	}
`;

module.exports = typeDefs;
