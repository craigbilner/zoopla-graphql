const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema/schema');
const app = express();

app.all('/graphql', (req, res) => res.redirect('/'));

app.use('/', graphqlHTTP(() => ({
  schema,
  graphiql: true,
})));

app.use('/test', (req, res) => {

});

app.listen(8080, () => {
  console.log('running on 8080');
});
