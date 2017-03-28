const graphql = require('graphql');

const {
  GraphQLObjectType,
} = graphql;
const GraphQLDate = require('graphql-date');

module.exports = new GraphQLObjectType({
  name: 'Timestamp',
  description: 'the timestamps for a Zoopla property listing',
  fields: () => ({
    published: {
      type: GraphQLDate,
      resolve({ first_published_date }) {
        return new Date(first_published_date);
      },
      description: 'the date a property was published',
    },
    updated: {
      type: GraphQLDate,
      resolve({ last_published_date }) {
        return new Date(last_published_date);
      },
      description: 'the date a property was last updated',
    },
  }),
});
