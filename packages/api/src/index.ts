import express, { RequestHandler } from 'express';
console.log('We will write our API server here');

// Creaed an INSTANCE of an API
const app = express();

/**
 * Each middleware takes 3 parameters
 * 1. Requst
 * 2. Response
 * 3. Next
 */

const firstMiddleware: RequestHandler = (req, res, next) => {
console.log('Getting url', req.url);
res.send('Hello');
    // next();
}

// Defining a new pipe
app.get('/', firstMiddleware);

// Running the web server on port 9999
app.listen(9999);
console.log('API running on localhost:9999');
