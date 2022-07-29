const dotenv = require('dotenv').config()
const { ApolloServer } = require('apollo-server');


const { rootResolver } = require('./Graphql/Resolvers/Merge');
const { mainSchema } = require('./Graphql/Schemas/Merge');

const PORT = process.env.PORT || 3000;
const HOST = process.env.ENV === 'dev' ? 'localhost' : null


const apolloServer = new ApolloServer({
  typeDefs: mainSchema,
  resolvers: rootResolver,
  subscriptions: {
    path: `/graphql`,
    onConnect: (connectionParams, webSocket, context) => {
      console.log('Client connected');
    },
    onDisconnect: (webSocket, context) => {
      console.log('Client disconnected')
    },
  },
  introspection: process.env.ENV === 'dev' ? true : false,
  playground: process.env.ENV === 'dev' ? true : false
});


apolloServer.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})