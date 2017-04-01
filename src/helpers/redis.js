/* eslint-disable consistent-return */

const redis = require('redis');

let client;

const getClient = () => new Promise((res, rej) => {
  if (client) {
    return res(client);
  }

  client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST, {
    connect_timeout: 15000,
  });

  client.on('error', rej);

  client.on('connect', () => res(client));
});

const get = key => getClient().then(c => new Promise((res, rej) => {
  c.get(key, (err, value) => {
    if (err) {
      return rej(err);
    }

    return res(value);
  });
}));

const set = key => value => getClient().then(c => new Promise((res, rej) => {
  c.set(key, value, (err) => {
    if (err) {
      return rej(err);
    }

    return res(value);
  });
}));

module.exports.set = set;
module.exports.get = get;
