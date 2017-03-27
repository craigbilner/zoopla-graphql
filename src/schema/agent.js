const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Agent',
  description: 'details of the agent selling a property',
  fields: () => ({
    address: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the address of the agent',
    },
    name: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the name of the agent',
    },
    logo: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the url to the logo of the agent',
    },
    phone: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the phone number of the agent',
    },
    fees: {
      type: GraphQLString,
      resolve(){
      },
      description: 'an HTML string of the agents terms',
    },
  }),
});
