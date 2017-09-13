'use strict';

import logger from '../util/logger';

import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
	firstName : String,
	lastName : String,
	Email : String,
	password: String
});


let user = require('./../model/userModel');

module.exports = function(app){

	app.post('/api/users', user.createUser);

	app.get('/api/userList', user.getUsers);
}