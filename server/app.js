const express = require('express');
// This allows express to understand graphql and provide a way to create an express server that runs graphql api
const graphqlHTTP = require('express-graphql');
// Setting up a middleware
const app = express();

app.use('/graphql', graphqlHTTP({
    
}))

app.listen(4000, () => {
    console.log("Listening for requests on port 4000");
})