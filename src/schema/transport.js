/* eslint-disable prefer-template */

const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLList,
} = graphql;
const TrainStation = require('./train-station');
const request = require('request-promise');

const GM_NEARBY_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const GM_MATRIX_URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';

const toJSON = s => JSON.parse(s);

const makeNearbyStationURL = (latitude, longitude, radius) =>
GM_NEARBY_URL +
'?location=' + latitude + ',' + longitude +
'&radius=' + radius +
'&type=train_station' +
'&key=' + process.env.GM_NS_API_KEY;

const makeStation = (oLat, oLong) => ({ geometry: { location: { lat, lng } }, name }) => ({
  name,
  oLat,
  oLong,
  lat,
  lng,
});

const makeStations = (oLat, oLong) => ({ results }) => results.map(makeStation(oLat, oLong));

const makeDestinations = ({ lat, lng }) =>
  `${lat},${lng}`;

const makeWalkingDistanceURL = (oLat, oLong, stations) =>
GM_MATRIX_URL +
'?origins=' + oLat + ',' + oLong +
'&destinations=' + stations.map(makeDestinations).join('|') +
'&mode=walking' +
'&key=' + process.env.GM_DM_API_KEY;

const mergeWalkingMetrics = details => (station, indx) => Object.assign({}, station, {
  gettingThere: {
    walking: {
      distance: details[indx].distance.value,
      time: details[indx].duration.value,
    },
  },
});

const applyWalkingDistancesToStations = stations => ({ rows: [{ elements }] }) =>
  stations.map(mergeWalkingMetrics(elements));

const decorateWithGettingThere = (oLat, oLong) => stations =>
  request(makeWalkingDistanceURL(oLat, oLong, stations))
    .then(toJSON)
    .then(applyWalkingDistancesToStations(stations));

module.exports = new GraphQLObjectType({
  name: 'Transport',
  description: 'details on the transport links near a property',
  fields: () => ({
    trainStations: {
      type: new GraphQLList(TrainStation),
      resolve({ latitude, longitude }, { radius = 2000 }) {
        return request(makeNearbyStationURL(latitude, longitude, radius))
          .then(toJSON)
          .then(makeStations(latitude, longitude))
          .then(decorateWithGettingThere(latitude, longitude));
      },
      description: 'a list of station near the property defaulted to a radius of 2km',
    },
  }),
});
