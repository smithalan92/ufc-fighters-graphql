const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const PORT = 8081;

// Setup our server
const app = express();

// Use the pre defined cors middleware
app.use(cors());

// Declare our single graphql route
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // set this to false to remove the web UI
}));

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
