const { ApolloServer } = require("apollo-server");
const typeDefs = require("./server/schema");
const { getPayload } = require("./utils");
const bikes = require("./data.json");

const resolvers = {
	Query: {
		bikes: (_, args) => {
			let input = args.serialNumber;
			return input.map((x) => {
				let modelCode = x[0];
				let yearCode = x[1];
				let monthCode = x[2];
				let factoryCode = x[5];
				const manufYear = "20" + x[3] + x[4];
				const version = x[6];
				const unique = x.slice(6, x.length);

				const selectValue = (data) => {
					if (data) return Object.values(data).toString();
					return;
				};

				modelCode = selectValue(
					bikes.modelCode.find((obj) => {
						return obj[modelCode];
					})
				);

				monthCode = selectValue(
					bikes.monthCode.find((obj) => {
						return obj[monthCode];
					})
				);

				yearCode = selectValue(
					bikes.yearCode.find((obj) => {
						return obj[yearCode];
					})
				);

				factoryCode = selectValue(
					bikes.factoryCode.find((obj) => {
						return obj[factoryCode];
					})
				);

				let result = {
					modelCode,
					yearCode,
					monthCode,
					factoryCode,
					manufYear,
					version,
					unique,
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
		const token = req.headers.authorization || "";
		return getPayload(token);
	},
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server launching on ${url}`);
});
