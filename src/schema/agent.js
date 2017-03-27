const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Image',
  description: 'details of an image of the property',
  fields: () => ({
    address: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the address of the agent selling the property',
    },
    name: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the name of the agent selling the property',
    },
    logo: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the url to the logo of the agent selling the property',
    },
    phone: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the phone number of the agent selling the property',
    },
    fees: {
      type: GraphQLString,
      resolve(){
      },
      description: 'an HTML string of the agents terms',
    },
  }),
});
