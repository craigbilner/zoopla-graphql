const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = graphql;
const TrainStation = require('./train-station');
const { getNearbyStations, getWalkingDetails } = require('../helpers/data');

const mergeWalkingMetric = details => (station, indx) => Object.assign({}, station, {
  gettingThere: {
    walking: {
      distance: details[indx].distance.value,
      time: details[indx].duration.value,
    },
  },
});

const mergeWalkingMetrics = ({ stations, walkingDetails }) =>
  stations.map(mergeWalkingMetric(walkingDetails));

const byMaxWalkTime = maxWalkTime => ({ gettingThere: { walking: { time } } }) =>
Math.ceil(time / 60) <= maxWalkTime;

const filterStations = maxWalkTime => (stations) => {
  if (!maxWalkTime) {
    return stations;
  }

  return stations.filter(byMaxWalkTime(maxWalkTime));
};

module.exports = new GraphQLObjectType({
  name: 'Transport',
  description: 'details on the transport links near a property',
  fields: () => ({
    trainStations: {
      type: new GraphQLList(TrainStation),
      args: {
        maxWalkTime: {
          type: GraphQLInt,
          description: 'the maximum walking time in minutes',
        },
      },
      resolve({ latitude, longitude, radius = 2000 }, { maxWalkTime }) {
        return getNearbyStations(process.env.GM_NS_API_KEY, latitude, longitude, radius)
          .then(getWalkingDetails(process.env.GM_DM_API_KEY, latitude, longitude))
          .then(mergeWalkingMetrics)
          .then(filterStations(maxWalkTime));
      },
      description: 'a list of station near the property defaulted to a radius of 2km',
    },
  }),
});
