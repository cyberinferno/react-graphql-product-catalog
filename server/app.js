const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const mongoose = require('./mongoose');
const productSchema = require('./graphql').productSchema;

mongoose();
const app = express();

app.use('*', cors());

app.use('/graphql', cors(), graphqlHTTP({
  schema: productSchema,
  rootValue: global,
  graphiql: true,
}));

// Run at Port 4000
app.listen(4000, () => {
  console.log('A GraphQL API running at port 4000');
});
