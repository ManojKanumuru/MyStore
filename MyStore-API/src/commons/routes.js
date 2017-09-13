'use strict';

import logger from '../util/logger';

import mongoose from 'mongoose';

let user = require('./../model/userModel');

let userService = require('./../service/userService');

module.exports = function(app){

	app.post('/api/users', user.createUser);

	app.get('/api/login', userService.getUserList);
}