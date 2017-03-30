const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLFloat,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Bounds',
  description: 'a square area of latitude and longitude',
  fields: () => ({
    minLongitude: {
      type: GraphQLFloat,
      resolve({ longitude_min }) {
        return parseFloat(longitude_min);
      },
      description: 'the minimum longitude',
    },
    maxLongitude: {
      type: GraphQLFloat,
      resolve({ latitude_min }) {
        return parseFloat(latitude_min);
      },
      description: 'the maximum longitude',
    },
    minLatitude: {
      type: GraphQLFloat,
      resolve({ longitude_max }) {
        return parseFloat(longitude_max);
      },
      description: 'the minimum latitude',
    },
    maxLatitude: {
      type: GraphQLFloat,
      resolve({ latitude_max }) {
        return parseFloat(latitude_max);
      },
      description: 'the maximum latitude',
    },
  }),
});
