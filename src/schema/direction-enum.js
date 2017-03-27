const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
  name: 'DirectionEnum',
  values: {
    NONE: {
      value: '',
    },
    UP: {
      value: 'up',
    },
    DOWN: {
      value: 'down',
    },
  },
});
