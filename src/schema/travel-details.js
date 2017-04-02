const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLFloat,
} = graphql;
const Time = require('./time');

module.exports = new GraphQLObjectType({
  name: 'TravelDetails',
  description: 'details of the distance and time to get from one place to another',
  fields: () => ({
    distance: {
      type: GraphQLFloat,
    },
    time: {
      type: Time,
    },
  }),
});
