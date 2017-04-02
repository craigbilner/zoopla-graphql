const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
  name: 'TravelModeEnum',
  values: {
    DRIVING: {
      value: 'DRIVING',
    },
    WALKING: {
      value: 'WALKING',
    },
    BICYCLING: {
      value: 'BICYCLING',
    },
    TRANSIT: {
      value: 'TRANSIT',
    },
  },
});
