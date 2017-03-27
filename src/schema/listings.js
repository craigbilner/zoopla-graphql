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
      resolve(){
      },
      description: 'the country being searched',
    },
    count: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of listings that match the search criteria',
    },
    longitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the longitude of the centre of the search radius',
    },
    name: {
      type: GraphQLString,
      resolve(){
      },
      description: 'search term',
    },
    properties: {
      type: new GraphQLList(Listing),
      resolve(){
      },
      description: 'the list of properties that match the search criteria',
    },
    street: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the street being searched',
    },
    town: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the two being searched',
    },
    latitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the latitude of the centre of the search radius',
    },
    county: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the county being searched',
    },
    bounds: {
      type: Bounds,
      resolve(){
      },
      description: 'the bounds of the search',
    },
    postcode: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the post code being searched',
    },
  }),
});
