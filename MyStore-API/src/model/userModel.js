'use strict';

import mongoose from 'mongoose';

import q from 'q';

import userService from './../service/userService';

let Schema = mongoose.Schema;

let userSchema = new Schema({
	firstName : {type:String},
	lastName : {type:String},
	Email : {
		type: String,
		unique:true
	},
	password: {type:String}
});

let User = mongoose.model('User',userSchema);

function createUser(req, res, next){
	let request = req.body;
	let errmsg = {
		error : ""
	};
	User.create(req.body, function(err, response){
		if(err){
			if(err.toString().indexOf('E11000') > -1){
				errmsg.error = 'Duplicate User';
				res.status(400);
			}
			res.send(errmsg);
		}else{
			if(response){
				res.send({"Success" : "User Created Successfully"});	
			}else{
				res.send({"Message" : "User Not Created"});
			}
		}
	});
}

function getUsers(req, res, next){
	User.find({}).then(function(results){
	    return userService.processResults(results);
	}).then(function(response){
	  	return res.send(response);
	}).catch(next);
}

module.exports = {
	createUser,
	getUsers
}

