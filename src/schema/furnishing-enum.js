const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
  name: 'FurnishingEnum',
  values: {
    FURNISHED: {
      value: 'furnished',
    },
    UNFURNISHED: {
      value: 'unfurnished',
    },
    PART: {
      value: 'part-furnished',
    },
  },
});
