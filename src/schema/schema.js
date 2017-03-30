const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
} = graphql;
const Listings = require('./listings');
const StatusEnum = require('./status-enum');
const TypeEnum = require('./type-enum');
const FurnishingEnum = require('./furnishing-enum');
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
  ['status', {
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
  ['minBeds', {
    key: 'minimum_beds',
    transform: identity,
  }],
  ['maxBeds', {
    key: 'maximum_beds',
    transform: identity,
  }],
  ['furnishings', {
    key: 'furnished',
    transform: identity,
  }],
  ['type', {
    key: 'property_type',
    transform: identity,
  }],
  ['isNew', {
    key: 'new_homes',
    transform: identity,
  }],
  ['isChainFree', {
    key: 'chain_free',
    transform: identity,
  }],
  ['keywords', {
    key: 'keywords',
    transform: identity,
  }],
  ['listingId', {
    key: 'listing_id',
    transform: identity,
  }],
  ['branchId', {
    key: 'branch_id',
    transform: identity,
  }],
  ['pageNumber', {
    key: 'page_number',
    transform: identity,
  }],
  ['pageSize', {
    key: 'page_size',
    transform: identity,
  }],
  ['isSummarised', {
    key: 'summarised',
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
        status: {
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
        minBeds: {
          type: GraphQLInt,
          description: 'only show properties that have at least this number of bedrooms',
        },
        maxBeds: {
          type: GraphQLInt,
          description: 'only show properties that have at most this number of bedrooms',
        },
        furnishings: {
          type: FurnishingEnum,
          description: 'only show properties that are this type of furnishing',
        },
        type: {
          type: TypeEnum,
          description: 'only show properties that are of this type',
        },
        isNew: {
          type: GraphQLBoolean,
          description: 'only show properties that are new homes',
        },
        isChainFree: {
          type: GraphQLBoolean,
          description: 'only show properties that are chain free',
        },
        keywords: {
          type: GraphQLString,
          description: 'only show properties that match these keywords',
        },
        listingId: {
          type: GraphQLString,
          description: 'only show the property that matches this id',
        },
        branchId: {
          type: GraphQLString,
          description: 'only show properties that match this branch id',
        },
        pageNumber: {
          type: GraphQLInt,
          description: 'show properties on this page',
        },
        pageSize: {
          type: GraphQLInt,
          description: 'show this number of properties on the page: max 100',
        },
        isSummarised: {
          type: GraphQLBoolean,
          description: 'show a cut down version of the property details',
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
