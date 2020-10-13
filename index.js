const { ApolloServer, gql } = require("apollo-server");
const bikes = require("./data.json");

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

const resolvers = {
	Query: {
		bikes: () => bikes,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
