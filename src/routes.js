const express = require('express');
const routes = express.Router();


const ProductController = require('./controllers/ProductController');

routes.get('/users', ProductController.index);
routes.get('/users/:id', ProductController.show);
routes.post('/user', ProductController.store);
routes.put('/user/:id', ProductController.update);
routes.delete('/user/:id', ProductController.destroy);


 module.exports = routes;