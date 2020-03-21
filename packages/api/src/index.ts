import express from 'express';
console.log('We will write our API server here');

// Creaed an INSTANCE of an API
const app = express();

// Running the web server on port 9999
app.listen(9999);
console.log('API running on localhost:9999');
