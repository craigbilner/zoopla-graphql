import React from 'react';
import { render } from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import './app.css';
import './graphiql.css';

const URL = `${window.location.origin}/graphql`;
const fetchOpts = params => ({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
});

const graphQLFetcher
  = graphQLParams => fetch(URL, fetchOpts(graphQLParams))
  .then(response => response.json());

render(<GraphiQL fetcher={graphQLFetcher}/>, document.getElementById('main'));
