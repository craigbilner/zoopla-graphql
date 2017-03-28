const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
} = graphql;
const Listings = require('./listings');
const StatusEnum = require('./status-enum');
const request = require('request-promise');
const data = require('../../fixtures/pl-tw');
const LISTINGS = 'http://api.zoopla.co.uk/api/v1/property_listings.json';
const paramKeys = new Map([
  ['area', 'area'],
  ['type', 'listing_status'],
]);

const rootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    listings: {
      type: Listings,
      description: 'Zoopla property listings',
      args: {
        type: {
          type: StatusEnum,
        },
        area: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'search term',
        },
      },
      resolve: (post, args) => {
        console.log(args);
        const params = Object.keys(args).reduce((ps, key) => {
          const mapping = paramKeys.get(key);

          if (mapping) {
            ps.push(`${mapping}=${args[key]}`);
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
