const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;
const Listings = require('./listings');

const rootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    listings: {
      type: Listings,
      description: 'Zoopla property listings',
      resolve: () => 'success !',
    },
  }),
});

module.exports = new GraphQLSchema({
  query: rootType,
});
