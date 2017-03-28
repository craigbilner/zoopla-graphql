const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
  name: 'TypeEnum',
  values: {
    TERRACED: { value: 'Terraced' },
    ENDOFTERRACE: { value: 'End of terrace' },
    SEMIDETACHED: { value: 'Semi-detached' },
    DETACHED: { value: 'Detached house' },
    MEWS: { value: 'Mews house' },
    FLAT: { value: 'Flat' },
    MAISONETTE: { value: 'Maisonette' },
    BUNGALOW: { value: 'Bungalow' },
    TOWNHOUSE: { value: 'Town house' },
    COTTAGE: { value: 'Cottage' },
    FARMORBARN: { value: 'Farm/Barn' },
    MOBILEORSTATIC: { value: 'Mobile/static' },
    LAND: { value: 'Land' },
    STUDIO: { value: 'Studio' },
    BLOCKOFFLATS: { value: 'Block of flats' },
    OFFICE: { value: 'Office' },
  },
});
