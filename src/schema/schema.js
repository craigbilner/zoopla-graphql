const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = graphql;
const Listings = require('./listings');
const StatusEnum = require('./status-enum');
const data = require('../../fixtures/pl-tw');

const rootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    listings: {
      type: Listings,
      description: 'Zoopla property listings',
      args: {
        type: {
          type: StatusEnum,
        },
        area: {
          type: GraphQLString,
          description: 'search term',
        },
      },
      resolve: (post, args) => {
        console.log(args);
        return data;
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: rootType,
});
