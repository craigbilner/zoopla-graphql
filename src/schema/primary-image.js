const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'PrimaryImage',
  description: 'details of the image of a property',
  fields: () => ({
    url: {
      type: GraphQLString,
      resolve({ image_url }) {
        return image_url;
      },
      description: 'the url of an image',
    },
    caption: {
      type: GraphQLString,
      resolve({ image_caption }) {
        return image_caption;
      },
      description: 'a possible caption for an image',
    },
  }),
});
