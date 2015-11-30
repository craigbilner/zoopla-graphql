const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema/schema');
const exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('dist'));

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
})));

app.use('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('running on 8080');
});
