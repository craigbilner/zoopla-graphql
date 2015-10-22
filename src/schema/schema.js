const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLString = graphql.GraphQLString;

const rootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    test: {
      type: GraphQLString,
      description: 'test'
    }
  }),
});

module.exports = new GraphQLSchema({query: rootType});