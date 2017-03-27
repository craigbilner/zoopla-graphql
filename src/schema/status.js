const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;
const StatusEnum = require('./status-enum');

module.exports = new GraphQLObjectType({
  name: 'Status',
  description: 'the status of a listing',
  fields: () => ({
    type: {
      type: StatusEnum,
      resolve(){
      },
      description: 'the status type of the listing',
    },
    description: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the status description of the listing',
    },
  }),
});
