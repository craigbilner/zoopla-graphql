const graphql = require('graphql');

const {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} = graphql;
const Price = require('./price');
const Image = require('./image');
const Agent = require('./agent');
const Location = require('./location');
const Particulars = require('./particulars');
const Status = require('./status');
const Description = require('./description');
const Timestamps = require('./timestamps');

module.exports = new GraphQLObjectType({
  name: 'Listing',
  description: 'details of a property',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve(){
      },
      description: 'the id of the property',
    },
    status: {
      type: Status,
      resolve(){
      },
      description: 'the status of the property',
    },
    category: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the category of the property: residential|commercial',
    },
    type: {
      type: GraphQLString,
      resolve(){
      },
      description: 'the type of property: Detached house',
    },
    description: {
      type: Description,
      resolve(){

      },
      description: 'the description of the property',
    },
    reportUrl: {
      type: GraphQLString,
      resolve(){
      },
      description: 'url to the property\'s report',
    },
    price: {
      type: Price,
      resolve(){
      },
      description: 'the price info of the property',
    },
    timestamps: {
      type: Timestamps,
      resolve(){
      },
      description: 'the Zoopla timestamps for the property listing',
    },
    images: {
      type: new GraphQLList(Image),
      resolve(){
      },
      description: 'the images of the property',
    },
    agent: {
      type: Agent,
      resolve(){
      },
      description: 'the agent selling the property',
    },
    location: {
      type: Location,
      resolve(){
      },
      description: 'the location of the property',
    },
    particulars: {
      type: Particulars,
      resolve(){
      },
      description: 'details of the rooms in the property'
    },
  }),
});
