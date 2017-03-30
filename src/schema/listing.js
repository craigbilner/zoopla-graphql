/* eslint-disable camelcase */

const graphql = require('graphql');

const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphql;
const Price = require('./price');
const PrimaryImage = require('./primary-image');
const Image = require('./image');
const Agent = require('./agent');
const Location = require('./location');
const Particulars = require('./particulars');
const Status = require('./status');
const Description = require('./description');
const Timestamps = require('./timestamps');
const CategoryEnum = require('./category-enum');
const TypeEnum = require('./type-enum');

module.exports = new GraphQLObjectType({
  name: 'Listing',
  description: 'details of a property',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve({ listing_id }) {
        return listing_id;
      },
      description: 'the id of the property',
    },
    status: {
      type: Status,
      resolve({ listing_status, status }) {
        return {
          listing_status,
          status,
        };
      },
      description: 'the status of the property',
    },
    category: {
      type: CategoryEnum,
      description: 'the category of the property',
    },
    type: {
      type: TypeEnum,
      resolve({ property_type }) {
        return property_type;
      },
      description: 'the type of property',
    },
    description: {
      type: Description,
      resolve({ description, details_url, short_description }) {
        return {
          description,
          details_url,
          short_description,
        };
      },
      description: 'the description of the property',
    },
    reportUrl: {
      type: GraphQLString,
      resolve({ property_report_url }) {
        return property_report_url;
      },
      description: 'url to the property\'s report',
    },
    price: {
      type: Price,
      resolve({ price, price_change }) {
        return {
          price,
          price_change,
        };
      },
      description: 'the price info of the property',
    },
    timestamps: {
      type: Timestamps,
      resolve({ first_published_date, last_published_date }) {
        return {
          first_published_date,
          last_published_date,
        };
      },
      description: 'the Zoopla timestamps for the property listing',
    },
    primaryImage: {
      type: PrimaryImage,
      resolve({ image_url, image_caption }) {
        return {
          image_url,
          image_caption,
        };
      },
      description: 'the primary image for the property',
    },
    thumbnail: {
      type: GraphQLString,
      resolve({ thumbnail_url }) {
        return thumbnail_url;
      },
      description: 'the url to the thumbnail image of the property',
    },
    images: {
      type: new GraphQLList(Image),
      resolve({
                image_150_113_url,
                image_50_38_url,
                image_645_430_url,
                image_80_60_url,
                image_354_255_url,
              }) {
        return [
          {
            name: 'image_150_113_url',
            url: image_150_113_url,
          },
          {
            name: 'image_50_38_url',
            url: image_50_38_url,
          },
          {
            name: 'image_645_430_url',
            url: image_645_430_url,
          },
          {
            name: 'image_80_60_url',
            url: image_80_60_url,
          },
          {
            name: 'image_354_255_url',
            url: image_354_255_url,
          },
        ];
      },
      description: 'the images of the property',
    },
    agent: {
      type: Agent,
      resolve({ agent_address, agent_name, agent_logo, agent_phone, letting_fees }) {
        return {
          agent_address,
          agent_name,
          agent_logo,
          agent_phone,
          letting_fees,
        };
      },
      description: 'the agent selling the property',
    },
    location: {
      type: Location,
      resolve({
                latitude,
                longitude,
                displayable_address,
                street_name,
                county,
                post_town,
                outcode,
                country,
                country_code,
              }) {
        return {
          latitude,
          longitude,
          displayable_address,
          street_name,
          county,
          post_town,
          outcode,
          country,
          country_code,
        };
      },
      description: 'the location of the property',
    },
    particulars: {
      type: Particulars,
      resolve({ num_floors, num_bedrooms, num_recepts, num_bathrooms, floor_plan }) {
        return {
          num_floors,
          num_bedrooms,
          num_recepts,
          num_bathrooms,
          floor_plan,
        };
      },
      description: 'details of the rooms in the property',
    },
  }),
});
