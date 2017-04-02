const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'TravelStepDetails',
  description: 'low level details of travelling from one location to another',
  fields: () => ({
    origin: {
      type: GraphQLString,
    },
    destination: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
    icon: {
      type: GraphQLString,
    },
  }),
});
