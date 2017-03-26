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
  graphiql: true,
})));

app.use('/', (req, res) => {
  res.render('index', assets);
});

app.listen(8080, () => {
  console.log('running on 8080');
});
