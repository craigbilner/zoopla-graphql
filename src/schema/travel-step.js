const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;
const TravelStepDetails = require('./travel-step-details');
const TravelModeEnum = require('./travel-mode-enum');
const Time = require('./time');

module.exports = new GraphQLObjectType({
  name: 'TravelStep',
  description: 'high level details of travelling from one location to another',
  fields: () => ({
    time: {
      type: Time,
    },
    description: {
      type: GraphQLString,
    },
    mode: {
      type: TravelModeEnum,
    },
    details: {
      type: TravelStepDetails,
    },
  }),
});
