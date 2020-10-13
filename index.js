const { ApolloServer, gql } = require("apollo-server");
// const bikes = require("./data.json");

const typeDefs = gql`
	type Bike {
		model_cd: GraphQLObjectType
		month_cd: GraphQLObjectType
		model_yr_cd: GraphQLObjectType
		factory_cd: GraphQLObjectType
	}
	type Query {
		bikes: [Bike]
	}
`;

const bikes = [
	{
		model_cd: {
			R: "RadRover",
			M: "RadMini",
			w: "RadWagon",
			6: "RadCity 16",
			9: "RadCity 19",
			S: "RadCity Stepthru",
			B: "RadBurro",
			H: "RadRhino",
			C: "Large Cargo Box",
			K: "Small Cargo Box",
			P: "Pedicab",
			F: "Flatbed",
			T: "Truckbed",
			N: "Insulated Cargo Box",
			Y: "Runner",
		},
	},
	{
		month_cd: {
			1: "January",
			2: "January",
			3: "March",
			4: "April",
			5: "May",
			6: "June",
			7: "July",
			8: "August",
			9: "September",
			O: "October",
			N: "November",
			D: "December",
		},
	},
	{
		model_yr_cd: {
			A: "2018",
			B: "2019",
			C: "2020",
			D: "2021",
		},
	},
	{
		factory_cd: {
			F: "FactoryF",
			V: "FactoryV",
		},
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
