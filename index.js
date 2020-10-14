const { ApolloServer } = require("apollo-server");
const typeDefs = require("./server/schema");
const bikes = require("./data.json");

const resolvers = {
	Query: {
		getBikes: () => {
			return [bikes];
		},
	},
};
console.log("[bikes] ******------>>>>>>", [bikes][0].modelCode[3]["6"]);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀 Server launching on ${url}`);
});
