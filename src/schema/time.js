const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLInt,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Time',
  fields: () => ({
    minutes: {
      type: GraphQLInt,
      resolve(time) {
        return Math.floor(time / 60);
      },
    },
    seconds: {
      type: GraphQLInt,
      resolve(time) {
        return time % 60;
      },
    },
  }),
});
