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
const { getPropertyList } = require('../helpers/data');

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
      resolve(post, args, ctx) {
        return getPropertyList(ctx.ZOOPLA_API_KEY, args);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: rootType,
});
