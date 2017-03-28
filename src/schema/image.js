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
      description: 'the url of an image',
    },
    height: {
      type: GraphQLInt,
      resolve({ name }) {
        const [, , height] = name.split('_');
        return parseInt(height, 10);
      },
      description: 'the height of an image',
    },
    width: {
      type: GraphQLInt,
      resolve({ name }) {
        const [, width] = name.split('_');
        return parseInt(width, 10);
      },
      description: 'the width of an image',
    },
  }),
});
