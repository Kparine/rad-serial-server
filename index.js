const { ApolloServer } = require("apollo-server");
const typeDefs = require("./server/schema");
const bikes = require("./data.json");

const resolvers = {
	Query: {
		bike: (_, args) => {
			// arg parsing here
			return { factoryCode: "F" };
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀 Server launching on ${url}`);
});
