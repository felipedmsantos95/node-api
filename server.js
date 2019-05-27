const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Inicio do app
const app = express();
app.use(express.json());

//Inicio DB

mongoose.connect(
	'mongodb://localhost:27017/nodeapi', 
	{useNewUrlParser: true}
);
requireDir("./src/models");

//Rotas
app.use('/', require('./src/routes'));

app.listen(4002);
