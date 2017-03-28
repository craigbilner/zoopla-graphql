const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
  name: 'CategoryEnum',
  values: {
    COMMERCIAL: {
      value: 'Commercial',
    },
    RESIDENTIAL: {
      value: 'Residential',
    },
  },
});
