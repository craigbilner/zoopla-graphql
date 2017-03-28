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
      resolve({ latitude }) {
        return parseFloat(latitude);
      },
      description: 'the latitude of the property',
    },
    longitude: {
      type: GraphQLFloat,
      resolve({ longitude }) {
        return parseFloat(longitude);
      },
      description: 'the longitude of the property',
    },
    address: {
      type: GraphQLString,
      resolve({ displayable_address }) {
        return displayable_address;
      },
      description: 'the address of the property',
    },
    street: {
      type: GraphQLString,
      resolve({ street_name }) {
        return street_name;
      },
      description: 'the street of the property',
    },
    county: {
      type: GraphQLString,
      description: 'the county of the property',
    },
    postalTown: {
      type: GraphQLString,
      resolve({ post_town }) {
        return post_town;
      },
      description: 'the postal town of the property',
    },
    outcode: {
      type: GraphQLString,
      description: 'the outcode of the property',
    },
    country: {
      type: GraphQLString,
      description: 'the country the property is in',
    },
    countryCode: {
      type: GraphQLString,
      resolve({ country_code }) {
        return country_code;
      },
      description: 'the country code of the country the property is in',
    },
  }),
});
