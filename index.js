const { ApolloServer, gql } = require("apollo-server");
const bikes = require("./data.json");

const typeDefs = gql`
	type Bike {
		data: String
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
