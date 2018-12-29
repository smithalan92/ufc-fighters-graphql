const { GraphQLObjectType } = require('graphql');
const fields = require('../queryfields');

// Define our root query here
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields,
});

module.exports = RootQuery;
