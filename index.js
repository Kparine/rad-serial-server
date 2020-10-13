const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const bikes = require("./data.json");

const resolvers = {
	Query: {
		bikes: () => [bikes],
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
