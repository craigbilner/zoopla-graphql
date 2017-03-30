const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema/schema');
const exphbs = require('express-handlebars');

const app = express();
const manifest = require('./dist/stats.json');

const makeScriptTags = ({ asset, hash }) => `${asset}.${hash}.js`;

const assets = {
  manifest: makeScriptTags(manifest.manifest),
  vendor: makeScriptTags(manifest.vendor),
  app: makeScriptTags(manifest.app),
};

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('dist'));

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
})));

app.use('/', (req, res) => {
  res.render('index', assets);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('running on 8080'); // eslint-disable-line no-console
});
