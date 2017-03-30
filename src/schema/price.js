/* eslint-disable camelcase */

const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLList,
} = graphql;
const PriceChange = require('./price-change');

module.exports = new GraphQLObjectType({
  name: 'Price',
  description: 'the price info of a property',
  fields: () => ({
    current: {
      type: GraphQLFloat,
      resolve({ price }) {
        return parseFloat(price);
      },
      description: 'the price of the property',
    },
    history: {
      type: new GraphQLList(PriceChange),
      resolve({ price_change }) {
        return price_change;
      },
      description: 'the price history of a property',
    },
  }),
});
