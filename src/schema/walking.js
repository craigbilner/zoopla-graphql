const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLFloat,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Walking',
  description: 'details of the distance and time to get from one lat and long to another while walking',
  fields: () => ({
    distance: {
      type: GraphQLFloat,
    },
    time: {
      type: GraphQLFloat,
    },
  }),
});
