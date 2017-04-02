const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
} = graphql;
const GettingThere = require('./getting-there');
const Commute = require('./commute');
const { getCommuteDetails } = require('../helpers/data');

module.exports = new GraphQLObjectType({
  name: 'TrainStation',
  description: 'details of a train station',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'the name of the station',
    },
    latitude: {
      type: GraphQLFloat,
      resolve({ lat }) {
        return parseFloat(lat);
      },
      description: 'the latitude of the station',
    },
    longitude: {
      type: GraphQLFloat,
      resolve({ lng }) {
        return parseFloat(lng);
      },
      description: 'the longitude of the station',
    },
    gettingThere: {
      type: GettingThere,
      description: 'distances and travel times from a property at current time',
    },
    commuteTo: {
      type: Commute,
      args: {
        destination: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'the station you would want to commute to',
        },
      },
      resolve({ lat, lng }, { destination }, ctx) {
        return getCommuteDetails(ctx.GM_D_API_KEY, lat, lng, destination);
      },
    },
  }),
});
