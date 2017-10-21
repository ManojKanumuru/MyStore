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

function createUser(req){
	console.log("inside create user model:");
	let request = req.body;
	let errmsg = {
		error : ""
	};
	let deferred  = q.defer();
	User.create(req.body, function (err, response){
		if(err){
			console.log("inside err:");
			if(err.toString().indexOf('E11000') > -1){
				errmsg.error = 'Duplicate User';
				errmsg.status = 400;
			}
			deferred.resolve(errmsg);
		}else{
			console.log("inside response");
			deferred.resolve({"Success" : "User Created Successfully"});
		}
	});
	/*User.create(req.body)
		.done( function resolveSuccess(response){
			console.log("inside response");
			deferred.resolve({"Success" : "User Created Successfully"});
		}, function resolveError(err){
			console.log("inside err:");
			if(err.toString().indexOf('E11000') > -1){
				errmsg.error = 'Duplicate User';
				errmsg.status = 400;
			}
			deferred.reject(errmsg);
	});*/
	return deferred.promise;
}

function getUsers(req){
	let deferred = q.defer();
	User.find({}).then(function(results){
		console.log("db response--->>>:");
	    deferred.resolve(results);
	});
	return deferred.promise;
}

module.exports = {
	createUser,
	getUsers
}