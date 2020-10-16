const { ApolloServer, ApolloError } = require("apollo-server");
const typeDefs = require("./server/schema");
const { getPayload } = require("./utils");
const bikes = require("./data.json");

const resolvers = {
	Query: {
		bikes: (_, args) => {
			let input = args.serialNumber;

			return input.map((x) => {
				console.log("x ******------>>>>>>", x);

				const modelCode = x[0];
				const yearCode = x[1];
				const monthCode = x[2];
				const manufYear = "20" + x[3] + x[4];
				const factoryCode = x[5];
				const version = x[6];
				// const unique = x.slice(6, x.length - 1).join("");

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

				let result = {
					modelCode: modelName,
					yearCode: yearSel,
					monthCode: monthName,
					factoryCode: factorySel,
					manufYear,
					version,
				};
				return result;
			});
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		try {
			const token = req.headers.authorization || "";
			const payload = getPayload(token);
			return payload;
		} catch (err) {
			console.log("err ******------>>>>>>", err);
		}
	},
});
server.listen().then(({ url }) => {
	console.log(`🚀 Server launching on ${url}`);
});
