const { ApolloServer } = require("apollo-server");
const typeDefs = require("./server/schema");
const bikes = require("./data.json");

const resolvers = {
	Query: {
		bikeList: (_, args) => {
			const input = args.serialNumber;
			for (let i = 0; i < input.length; i++) {
				console.log("input[i] ******------>>>>>>", input[i]);
			}

			const modelCode = input[0];
			// const yearCode = input[1];
			// const monthCode = input[2];
			// const manufYear = "20" + input[3] + input[4];
			// const factoryCode = input[5];
			// const version = input[6];
			// const unique = input.slice(6, input.length - 1).join("");

			const name = bikes.modelCode.find((obj) => {
				const temp = obj[modelCode];
				return temp;
			});
			const modelName = Object.values(name).toString();

			const month = bikes.monthCode.find((obj) => {
				const temp = obj[monthCode];
				return temp;
			});
			const monthName = Object.values(month).toString();

			const year = bikes.yearCode.find((obj) => {
				const temp = obj[yearCode];
				return temp;
			});
			const yearSel = Object.values(year).toString();

			const factory = bikes.factoryCode.find((obj) => {
				const temp = obj[factoryCode];
				return temp;
			});
			const factorySel = Object.values(factory).toString();
			let result = [];
			let res = {
				modelCode: modelName,
				yearCode: yearSel,
				monthCode: monthName,
				factoryCode: factorySel,
				manufYear,
				version,
				unique,
			};

			console.log("res ******------>>>>>>", res);

			return res;
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀 Server launching on ${url}`);
});
