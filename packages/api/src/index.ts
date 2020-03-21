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

 const middlewareLogger: RequestHandler = (req, _res, next) => {
    console.log('Getting url', req.url);
    next();
 }

const firstMiddleware: RequestHandler = (_req, res) => {
res.send('Send 1');
}

const secondMiddleware: RequestHandler = (_req, res) => {
res.send('Send 2');
}

// Use the middleware for ALL requests (Includes, get, post, put, any url)
app.use(middlewareLogger);

// Defining a new pipe
app.get('/', firstMiddleware);
app.get('/two', secondMiddleware);

// Running the web server on port 9999
app.listen(9999);
console.log('API running on localhost:9999');
