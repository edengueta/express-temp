const express = require('express');
const routes = express.Router();
const Tasks = require('../controllers/tasks')


routes.get('/task', Tasks.getAll);
routes.put('/task', Tasks.create);
routes.delete('/task/:id', Tasks.delete);
routes.post('/task/:id', Tasks.edit);


module.exports = routes;