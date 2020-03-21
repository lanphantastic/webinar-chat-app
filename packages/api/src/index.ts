import express, { Router } from 'express';
import { middlewareLogger } from './middleware/logger';
import { usersRouter } from './routes/users';

console.log('We will write our API server here');

// Creaed an INSTANCE of an API
const app = express();

/**
 * Each middleware takes 3 parameters
 * 1. Requst
 * 2. Response
 * 3. Next
 */

// Use the middleware for ALL requests (Includes, get, post, put, any url)
app.use(middlewareLogger);

// Defining a new pipe
app.get('/', usersRouter);

const r = Router();
r.get('/'); // Get list
r.post('/'); // Create new

// Running the web server on port 9999
app.listen(9999);
console.log('API running on localhost:9999');
