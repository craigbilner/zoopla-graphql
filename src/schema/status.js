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
      resolve({ listing_status }) {
        return listing_status;
      },
      description: 'the status type of the listing',
    },
    description: {
      type: GraphQLString,
      resolve({ status }) {
        return status;
      },
      description: 'the status description of the listing',
    },
  }),
});
