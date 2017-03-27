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
      resolve(){
      },
      description: 'the price of the property',
    },
    changes: {
      type: new GraphQLList(PriceChange),
      resolve(){
      },
      description: 'the price history of a property',
    },
  }),
});
