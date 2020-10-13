const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	type Bike {
		model: String
		model_yr: String
	}
	type Query {
		bikes: [Bike]
	}
`;

const bikes = [
	{
		model: "RadCity Stepthru",
		model_yr: "2011",
		manu_mth: 12,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "Runner",
		model_yr: "2011",
		manu_mth: 6,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "Small Cargo Box",
		model_yr: "2011",
		manu_mth: 9,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "Flatbed",
		model_yr: "2011",
		manu_mth: 10,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "RadRhino",
		model_yr: "2011",
		manu_mth: 11,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "RadWagon",
		model_yr: "2011",
		manu_mth: 12,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
];

const resolvers = {
	Query: {
		bikes: () => bikes,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
