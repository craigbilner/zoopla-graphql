/* eslint-disable prefer-template */

const request = require('request-promise');
const { get, set } = require('./redis');
const { identity, boolToBit, toJSON } = require('./utils');

const LISTINGS = 'http://api.zoopla.co.uk/api/v1/property_listings.json';
const GM_NEARBY_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const GM_MATRIX_URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';

const makeNearbyStationURL = (key, latitude, longitude, radius) =>
GM_NEARBY_URL +
'?location=' + latitude + ',' + longitude +
'&radius=' + radius +
'&type=train_station' +
'&key=' + key;

const makeDestinations = ({ lat, lng }) =>
  `${lat},${lng}`;

const makeWalkingDistanceURL = (key, oLat, oLong, stations) =>
GM_MATRIX_URL +
'?origins=' + oLat + ',' + oLong +
'&destinations=' + stations.map(makeDestinations).join('|') +
'&mode=walking' +
'&key=' + key;

const fetchData = url => get(url)
  .then((value) => {
    if (!value) {
      return request(url)
        .then(set(url));
    }

    return value;
  })
  .then(toJSON);

const paramKeys = new Map([
  ['area', {
    key: 'area',
    transform: identity,
  }],
  ['status', {
    key: 'listing_status',
    transform: identity,
  }],
  ['includeSold', {
    key: 'include_sold',
    transform: boolToBit,
  }],
  ['includeRented', {
    key: 'include_rented',
    transform: boolToBit,
  }],
  ['minPrice', {
    key: 'minimum_price',
    transform: identity,
  }],
  ['maxPrice', {
    key: 'maximum_price',
    transform: identity,
  }],
  ['minBeds', {
    key: 'minimum_beds',
    transform: identity,
  }],
  ['maxBeds', {
    key: 'maximum_beds',
    transform: identity,
  }],
  ['furnishings', {
    key: 'furnished',
    transform: identity,
  }],
  ['type', {
    key: 'property_type',
    transform: identity,
  }],
  ['isNew', {
    key: 'new_homes',
    transform: identity,
  }],
  ['isChainFree', {
    key: 'chain_free',
    transform: identity,
  }],
  ['keywords', {
    key: 'keywords',
    transform: identity,
  }],
  ['listingId', {
    key: 'listing_id',
    transform: identity,
  }],
  ['branchId', {
    key: 'branch_id',
    transform: identity,
  }],
  ['pageNumber', {
    key: 'page_number',
    transform: identity,
  }],
  ['pageSize', {
    key: 'page_size',
    transform: identity,
  }],
  ['isSummarised', {
    key: 'summarised',
    transform: identity,
  }],
]);

const makeParams = args => Object.keys(args).reduce((ps, key) => {
  const mapping = paramKeys.get(key);

  if (mapping) {
    ps.push(`${mapping.key}=${mapping.transform(args[key])}`);
  }

  return ps;
}, []);

const makeStation = (oLat, oLong) => ({ geometry: { location: { lat, lng } }, name }) => ({
  name,
  oLat,
  oLong,
  lat,
  lng,
});

const makeStations = (oLat, oLong) => ({ results }) => results.map(makeStation(oLat, oLong));

const mapStations = stations => ({ rows: [{ elements }] }) => ({
  stations,
  walkingDetails: elements,
});

const getPropertyList = (key, args) =>
  fetchData(`${LISTINGS}?api_key=${key}&${makeParams(args).join('&')}`);

const getNearbyStations = (key, latitude, longitude, radius) =>
  fetchData(makeNearbyStationURL(key, latitude, longitude, radius))
    .then(makeStations(latitude, longitude));

const getWalkingDetails = (key, latitude, longitude) => stations =>
  fetchData(makeWalkingDistanceURL(key, latitude, longitude, stations))
    .then(mapStations(stations));

module.exports.getPropertyList = getPropertyList;
module.exports.getNearbyStations = getNearbyStations;
module.exports.getWalkingDetails = getWalkingDetails;
