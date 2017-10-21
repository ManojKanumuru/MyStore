'use strict';

import express from 'express';

let apiRoutes = express.Router();

let user = require('./../model/userModel');

module.exports = function(app){

	apiRoutes.post('/users', user.createUser);

	apiRoutes.get('/login', user.getUsers);
	
	app.use('/mystore', apiRoutes);
}