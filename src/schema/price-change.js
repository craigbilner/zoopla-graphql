const graphql = require('graphql');

const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
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
      resolve(){
      },
      description: 'the direction of the price change',
    },
    date: {
      type: GraphQLDate,
      resolve(){
      },
      description: 'the date of the price change',
    },
    percent: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the percentage change',
    },
    price: {
      type: GraphQLFloat,
      resolve(){
      },
      description: 'the new price',
    },
  }),
});
