const express = require('express');
const routes = express.Router();
const Tasks = require('../controllers/tasks')
const Albums = require('../controllers/albums')



routes.get('/task', Tasks.getAll);
routes.put('/task', Tasks.create);
routes.delete('/task/:id', Tasks.delete);
routes.post('/task/:id', Tasks.edit);

routes.get('/album', Albums.getAll);
routes.put('/album', Albums.create);
routes.delete('/album/:id', Albums.delete);
routes.post('/album/:id', Albums.edit);


module.exports = routes;