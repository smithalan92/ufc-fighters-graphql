const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');

// Declare our data structure for a fighter
const Fighter = new GraphQLObjectType({
  name: 'Fighter',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    class: { type: GraphQLString },
    wins: { type: GraphQLInt },
    losses: { type: GraphQLInt },
    draws: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    avatar: { type: GraphQLString }
  }),
});

module.exports = Fighter;
