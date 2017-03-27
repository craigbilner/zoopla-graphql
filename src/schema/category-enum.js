const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
  name: 'CategoryEnum',
  values: {
    COMMERCIAL: {
      value: 'commercial',
    },
    RESIDENTIAL: {
      value: 'residential',
    },
  },
});
