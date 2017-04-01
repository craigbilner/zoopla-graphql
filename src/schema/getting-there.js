const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLFloat,
} = graphql;
const Walking = require('./walking');

module.exports = new GraphQLObjectType({
  name: 'GettingThere',
  description: 'details of distances and times to get from one lat and long to another',
  fields: () => ({
    oLatitude: {
      type: GraphQLFloat,
      description: 'the latitude of the origin',
    },
    oLongitude: {
      type: GraphQLFloat,
      description: 'the longitude of the origin',
    },
    dLatitude: {
      type: GraphQLFloat,
      description: 'the latitude of the destination',
    },
    dLongitude: {
      type: GraphQLFloat,
      description: 'the longitude of the destination',
    },
    walking: {
      type: Walking,
      description: 'the walking details of getting from the origin to the destination',
    },
  }),
});
