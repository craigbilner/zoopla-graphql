const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Description',
  description: 'a description of a property',
  fields: () => ({
    short: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the short description of a property',
    },
    long: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the long description of a property',
    },
    url: {
      type: GraphQLString,
      resolve(){
      },
      description: 'url to a property\'s details',
    },
  }),
});
