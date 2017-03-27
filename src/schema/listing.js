const graphql = require('graphql');

const {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = graphql;
const GraphQLDate = require('graphql-date');
const PriceChange = require('./price-change');
const Image = require('./image');
const Agent = require('./agent');

module.exports = new GraphQLObjectType({
  name: 'Listing',
  description: 'Details of a property',
  fields: () => ({
    countryCode: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the country code of the country the property is in',
    },
    floors: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of floors of the property',
    },
    status: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the status of the listing: sale|rent',
    },
    bedrooms: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the number of bedrooms in the property',
    },
    latitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the latitude of the property',
    },
    category: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the category of the property: residential|commercial',
    },
    type: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the type of property: Detached house',
    },
    longitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the longitude of the property',
    },
    descriptionLong: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the description of the property',
    },
    postalTown: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the postal town of the property',
    },
    detailsUrl: {
      type: GraphQLString,
      resolve(){
      },
      description: 'url of the property details',
    },
    descriptionShort: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the short description of the property',
    },
    outcode: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the outcode of the property',
    },
    reportUrl: {
      type: GraphQLString,
      resolve(){
      },
      description: 'url the the property\'s report',
    },
    county: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the county of the property',
    },
    price: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the price of the property',
    },
    id: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the id of the property',
    },
    statusDescription: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the status description of the property: for_sale',
    },
    receptions: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of reception rooms the property has',
    },
    country: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the country the property is in',
    },
    published: {
      type: GraphQLDate,
      resolve(){
      },
      description: 'the date the property was published',
    },
    address: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the address of the property',
    },
    floorPlans: {
      type: new GraphQLList(GraphQLString),
      resolve(){
      },
      description: 'urls to any floor plan details',
    },
    street: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the street of the property',
    },
    bathrooms: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of bathrooms the property has',
    },
    priceChanges: {
      type: new GraphQLList(PriceChange),
      resolve(){
      },
      description: 'the address of the property',
    },
    lastPublishedDate: {
      type: GraphQLDate,
      resolve(){
      },
      description: 'the date the property was last updated',
    },
    images: {
      type: new GraphQLList(Image),
      resolve(){
      },
      description: 'the date the property was last updated',
    },
    agent: {
      type: Agent,
      resolve(){
      },
      description: 'the agent selling the property',
    },
  }),
});
