#!/usr/bin/env node

const Express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/index');

const app = new Express();
const port = process.env.PORT || 5000;

require('./db.js');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.use(require('./routes/index'));
app.use(cors());

app.listen(port, () => console.log(`Server was started on ${port}`));

