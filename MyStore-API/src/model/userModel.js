'use strict';

import mongoose from 'mongoose';

//mongoose.Promise = require('q').Promise;

let Schema = mongoose.Schema;

let userSchema = new Schema({
	firstName : String,
	lastName : String,
	Email : {
		type: String,
		unique:true
	},
	password: String
});

let User = mongoose.model('User',userSchema);

function createUser(req, res, next){

	let request = req.body;
	let errmsg = {
		error : ""
	};
	User.create(request, function(err, response){
		if(err){
			if(err.toString().indexOf('E11000') > -1){
				errmsg.error = 'Duplicate User';
				res.status(400);
			}
			res.send(errmsg);
		}else{
			res.send(response);
		}
	});
}

function getUsers(req, res, next){
	User.find({}).exec(function(err, collection){
		if(err){
			res.send(err);
		}else{
			res.send(collection);
		}
	});
}
module.exports = {
	createUser,
	getUsers
}