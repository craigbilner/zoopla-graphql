/* eslint-disable camelcase */

const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Description',
  description: 'a description of a property',
  fields: () => ({
    short: {
      type: GraphQLString,
      resolve({ short_description }) {
        return short_description;
      },
      description: 'the short description of a property',
    },
    long: {
      type: GraphQLString,
      resolve({ description }) {
        return description;
      },
      description: 'the long description of a property',
    },
    url: {
      type: GraphQLString,
      resolve({ details_url }) {
        return details_url;
      },
      description: 'url to a property\'s details',
    },
  }),
});
