'use strict';

import logger from '../util/logger';

import mongoose from 'mongoose';

let user = require('./../model/userModel');

let userService = require('./../service/userService');

module.exports = function(app){

	app.post('/myStore/users', user.createUser);

	app.get('/myStore/login', user.getUsers);// need to check with userService.getUserList
}