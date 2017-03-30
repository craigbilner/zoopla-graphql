/* eslint-disable camelcase */

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
      resolve({ agent_address }) {
        return agent_address;
      },
      description: 'the address of the agent',
    },
    name: {
      type: GraphQLString,
      resolve({ agent_name }) {
        return agent_name;
      },
      description: 'the name of the agent',
    },
    logo: {
      type: GraphQLString,
      resolve({ agent_logo }) {
        return agent_logo;
      },
      description: 'the url to the logo of the agent',
    },
    phone: {
      type: GraphQLString,
      resolve({ agent_phone }) {
        return agent_phone;
      },
      description: 'the phone number of the agent',
    },
    fees: {
      type: GraphQLString,
      resolve({ letting_fees }) {
        return letting_fees;
      },
      description: 'an HTML string of the agents terms',
    },
  }),
});
