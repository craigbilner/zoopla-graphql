const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Status',
  description: 'the status of a listing',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the status type of the listing: sale|rent',
    },
    description: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the status description of the listing: for_sale',
    },
  }),
});
