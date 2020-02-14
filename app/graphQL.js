const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')
const { classes, users } = require('./dataStore')

const server = new ApolloServer({ typeDefs, resolvers, context: { classes, users } });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
