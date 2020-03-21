import { Router } from 'express';

export const usersRouter = Router();

// CRUD of ther User in REST API

// Get list of users
usersRouter.get('/', (_req, _res, next) => {
    next();
})

// Get a user with id of userID
usersRouter.get('/:userID', (_req, _res, next) => {
    next();
})

// Create a user
usersRouter.post('/', (_req, _res, next) => {
    next();
})

// Update a user
usersRouter.put('/:userID', (_req, _res, next) => {
    next();
})

// Delete a user
usersRouter.delete('/:userID', (_req, _res, next) => {
    next();
})