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
      resolve(){
      },
      description: 'the date a property was published',
    },
    updated: {
      type: GraphQLDate,
      resolve(){
      },
      description: 'the date a property was last updated',
    },
  }),
});
