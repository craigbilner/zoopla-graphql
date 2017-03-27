const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Location',
  description: 'details of a the location of a property',
  fields: () => ({
    latitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the latitude of the property',
    },
    longitude: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the longitude of the property',
    },
    address: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the address of the property',
    },
    street: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the street of the property',
    },
    county: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the county of the property',
    },
    postalTown: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the postal town of the property',
    },
    outcode: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the outcode of the property',
    },
    country: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the country the property is in',
    },
    countryCode: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the country code of the country the property is in',
    },
  }),
});
