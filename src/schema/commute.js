const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLList,
} = graphql;
const TravelStep = require('./travel-step');
const Time = require('./time');

module.exports = new GraphQLObjectType({
  name: 'Commute',
  description: 'details of a commute from one station to another',
  fields: () => ({
    time: {
      type: Time,
    },
    steps: {
      type: new GraphQLList(TravelStep),
    },
  }),
});
