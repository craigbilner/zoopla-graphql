const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLFloat
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Bounds',
  description: 'A square area of latitude and longitude',
  fields: () => ({
    minLongitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the minimum longitude',
    },
    maxLongitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the maximum longitude',
    },
    minLatitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the minimum latitude',
    },
    maxLatitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the maximum latitude',
    },
  }),
});
