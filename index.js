const { ApolloServer } = require("apollo-server");
const typeDefs = require("./server/schema");
const bikes = require("./data.json");

const resolvers = {
	Query: {
		bike: (_, args) => {
			// arg parsing here
			const res = args.serialNumber.split("");
			const bikeModel = res[0];
			const modelYear = res[1];
			const monthCode = res[2];
			const manufYear = "20" + res[3] + res[4];
			const factoryCode = res[5];
			const version = res[6];
			const unique = res.slice(6, res.length - 1).join("");

			return { factoryCode: "F" };
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀 Server launching on ${url}`);
});
