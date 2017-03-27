const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Image',
  description: 'details of an image of the property',
  fields: () => ({
    url: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the url of the image',
    },
    height: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the height of the image',
    },
    width: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the width of the image',
    },
    caption: {
      type: GraphQLString,
      resolve(){
      },
      description: 'a possible caption for the image',
    },
  }),
});
