const { GraphQLSchema } = require('graphql');
const RootQuery = require('./queries/root');

// Define our schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
