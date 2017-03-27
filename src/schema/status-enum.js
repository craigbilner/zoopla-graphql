const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
  name: 'StatusEnum',
  values: {
    SALE: {
      value: 'sale',
    },
    RENT: {
      value: 'rent',
    },
  },
});
