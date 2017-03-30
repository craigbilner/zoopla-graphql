const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat,
} = graphql;
const Listings = require('./listings');
const StatusEnum = require('./status-enum');
const request = require('request-promise');
// const data = require('../../fixtures/pl-tw');

const LISTINGS = 'http://api.zoopla.co.uk/api/v1/property_listings.json';
const identity = x => x;
const boolToBit = val => val >> 0;
const paramKeys = new Map([
  ['area', {
    key: 'area',
    transform: identity,
  }],
  ['type', {
    key: 'listing_status',
    transform: identity,
  }],
  ['includeSold', {
    key: 'include_sold',
    transform: boolToBit,
  }],
  ['includeRented', {
    key: 'include_rented',
    transform: boolToBit,
  }],
  ['minPrice', {
    key: 'minimum_price',
    transform: identity,
  }],
  ['maxPrice', {
    key: 'maximum_price',
    transform: identity,
  }],
]);

const rootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    listings: {
      type: Listings,
      description: 'Zoopla property listings',
      args: {
        area: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'search term',
        },
        type: {
          type: StatusEnum,
          description: 'show properties that are for sale or for rent only',
        },
        includeSold: {
          type: GraphQLBoolean,
          description: 'show properties that have already been sold',
        },
        includeRented: {
          type: GraphQLBoolean,
          description: 'show properties that have already been rented',
        },
        minPrice: {
          type: GraphQLFloat,
          description: 'only show properties that are at least this price',
        },
        maxPrice: {
          type: GraphQLFloat,
          description: 'only show properties that are at most this price',
        },
      },
      resolve: (post, args) => {
        console.log(args); // eslint-disable-line no-console
        const params = Object.keys(args).reduce((ps, key) => {
          const mapping = paramKeys.get(key);

          if (mapping) {
            ps.push(`${mapping.key}=${mapping.transform(args[key])}`);
          }

          return ps;
        }, []);

        return request(`${LISTINGS}?api_key=${process.env.API_KEY}&${params.join('&')}`)
          .then(res => JSON.parse(res));
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: rootType,
});
