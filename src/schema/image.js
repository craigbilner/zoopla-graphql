const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Image',
  description: 'details of an image of a property',
  fields: () => ({
    url: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the url of an image',
    },
    height: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the height of an image',
    },
    width: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the width of an image',
    },
    caption: {
      type: GraphQLString,
      resolve(){
      },
      description: 'a possible caption for an image',
    },
  }),
});
