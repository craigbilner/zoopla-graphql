const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Particulars',
  description: 'details of the rooms that make up a property',
  fields: () => ({
    floors: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of floors of a property',
    },
    bedrooms: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of bedrooms in a property',
    },
    receptions: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of reception rooms in a property',
    },
    bathrooms: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the number of bathrooms in a property',
    },
    urls: {
      type: new GraphQLList(GraphQLString),
      resolve(){
      },
      description: 'urls to any floor plan details',
    },
  }),
});
