/* eslint-disable camelcase */

const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Particulars',
  description: 'details of the rooms that make up a property',
  fields: () => ({
    floors: {
      type: GraphQLInt,
      resolve({ num_floors }) {
        return parseInt(num_floors, 10);
      },
      description: 'the number of floors of a property',
    },
    bedrooms: {
      type: GraphQLInt,
      resolve({ num_bedrooms }) {
        return parseInt(num_bedrooms, 10);
      },
      description: 'the number of bedrooms in a property',
    },
    receptions: {
      type: GraphQLInt,
      resolve({ num_recepts }) {
        return parseInt(num_recepts, 10);
      },
      description: 'the number of reception rooms in a property',
    },
    bathrooms: {
      type: GraphQLInt,
      resolve({ num_bathrooms }) {
        return parseInt(num_bathrooms, 10);
      },
      description: 'the number of bathrooms in a property',
    },
    urls: {
      type: new GraphQLList(GraphQLString),
      resolve({ floor_plan }) {
        return floor_plan;
      },
      description: 'urls to any floor plan details',
    },
  }),
});
