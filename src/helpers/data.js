/* eslint-disable prefer-template */

const request = require('request-promise');

const GM_NEARBY_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

const toJSON = s => JSON.parse(s);

const makeNearbyStationURL = (key, latitude, longitude, radius) =>
GM_NEARBY_URL +
'?location=' + latitude + ',' + longitude +
'&radius=' + radius +
'&type=train_station' +
'&key=' + key;

const makeStation = (oLat, oLong) => ({ geometry: { location: { lat, lng } }, name }) => ({
  name,
  oLat,
  oLong,
  lat,
  lng,
});

const makeStations = (oLat, oLong) => ({ results }) => results.map(makeStation(oLat, oLong));

const getNearbyStations = (key, latitude, longitude, radius) =>
  request(makeNearbyStationURL(key, latitude, longitude, radius))
    .then(toJSON)
    .then(makeStations(latitude, longitude));

const GM_MATRIX_URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';

const makeDestinations = ({ lat, lng }) =>
  `${lat},${lng}`;

const makeWalkingDistanceURL = (key, oLat, oLong, stations) =>
GM_MATRIX_URL +
'?origins=' + oLat + ',' + oLong +
'&destinations=' + stations.map(makeDestinations).join('|') +
'&mode=walking' +
'&key=' + key;

const mapStations = stations => ({ rows: [{ elements }] }) => ({
  stations,
  walkingDetails: elements,
});

const getWalkingDetails = (key, latitude, longitude) => stations =>
  request(makeWalkingDistanceURL(key, latitude, longitude, stations))
    .then(toJSON)
    .then(mapStations(stations));

module.exports.getNearbyStations = getNearbyStations;
module.exports.getWalkingDetails = getWalkingDetails;
