'use strict';

import express from 'express';

let apiRoutes = express.Router();

import userService from './../service/userService';

module.exports = function(app){

	apiRoutes.post('/users', function(req, res,next){
		userService.createUserMethod(req).then(function(response){
			res.send(response);
		});
	});

	apiRoutes.get('/login', function(req, res,next){
		userService.getUserDetails(req).then(function(response){
			res.send(response);
		});
	});
	
	app.use('/myStore', apiRoutes);
}