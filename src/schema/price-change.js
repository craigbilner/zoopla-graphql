const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLFloat,
} = graphql;
const GraphQLDate = require('graphql-date');
const DirectionEnum = require('./direction-enum');

module.exports = new GraphQLObjectType({
  name: 'PriceChange',
  description: 'the price change of a property',
  fields: () => ({
    direction: {
      type: DirectionEnum,
      resolve({ direction }) {
        return direction;
      },
      description: 'the direction of the price change',
    },
    date: {
      type: GraphQLDate,
      resolve({ date }) {
        return new Date(date);
      },
      description: 'the date of the price change',
    },
    percent: {
      type: GraphQLFloat,
      resolve({ percent }) {
        return parseFloat(percent);
      },
      description: 'the percentage change',
    },
    price: {
      type: GraphQLFloat,
      resolve({ price }) {
        return parseFloat(price);
      },
      description: 'the new price',
    },
  }),
});
