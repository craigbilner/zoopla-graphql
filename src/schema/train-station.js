const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = graphql;
const GettingThere = require('./getting-there');

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
      description: 'the latitude of the station',
    },
    longitude: {
      type: GraphQLFloat,
      description: 'the longitude of the station',
    },
    gettingThere: {
      type: GettingThere,
      description: 'distances and travel times from a property at current time',
    },
  }),
});
