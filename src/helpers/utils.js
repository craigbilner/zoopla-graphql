const identity = x => x;
const boolToBit = val => val >> 0;
const toJSON = s => JSON.parse(s);

module.exports.identity = identity;
module.exports.boolToBit = boolToBit;
module.exports.toJSON = toJSON;
