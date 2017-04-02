const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema/schema');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
  context: {
    ZOOPLA_API_KEY: process.env.ZOOPLA_API_KEY,
    GM_NS_API_KEY: process.env.GM_NS_API_KEY,
    GM_DM_API_KEY: process.env.GM_DM_API_KEY,
    GM_D_API_KEY: process.env.GM_D_API_KEY,
  },
})));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('running on 8080'); // eslint-disable-line no-console
});
