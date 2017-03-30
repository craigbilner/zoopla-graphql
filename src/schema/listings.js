/* eslint-disable camelcase */

const graphql = require('graphql');
const Listing = require('./listing');
const Bounds = require('./bounds');

const {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Listings',
  description: 'the area of search',
  fields: () => ({
    country: {
      type: GraphQLString,
      description: 'the country being searched',
    },
    count: {
      type: GraphQLInt,
      resolve({ result_count }) {
        return result_count;
      },
      description: 'the number of listings that match the search criteria',
    },
    longitude: {
      type: GraphQLFloat,
      resolve({ longitude }) {
        return parseFloat(longitude);
      },
      description: 'the longitude of the centre of the search radius',
    },
    name: {
      type: GraphQLString,
      resolve({ area_name }) {
        return area_name;
      },
      description: 'area name',
    },
    properties: {
      type: new GraphQLList(Listing),
      args: {
        first: {
          type: GraphQLInt,
          description: 'how many properties to take from the start',
        },
      },
      resolve({ listing }, { first }) {
        return listing.slice(0, first);
      },
      description: 'the list of properties that match the search criteria',
    },
    street: {
      type: GraphQLString,
      description: 'the street being searched',
    },
    town: {
      type: GraphQLString,
      description: 'the town being searched',
    },
    latitude: {
      type: GraphQLFloat,
      resolve({ latitude }) {
        return parseFloat(latitude);
      },
      description: 'the latitude of the centre of the search radius',
    },
    county: {
      type: GraphQLString,
      description: 'the county being searched',
    },
    bounds: {
      type: Bounds,
      resolve({ bounding_box }) {
        return bounding_box;
      },
      description: 'the bounds of the search',
    },
    postcode: {
      type: GraphQLString,
      description: 'the post code being searched',
    },
  }),
});
