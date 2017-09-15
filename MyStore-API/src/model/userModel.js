'use strict';

import mongoose from 'mongoose';

import q from 'q';

import _ from 'underscore';

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
	User.create(request, (err, response)=>{
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

function processResults(response){
	
	let finalResult = _.pluck(response,'_id');
	return finalResult;
}

function getUsers(req, res, next){
	User.find({}).then(function(results){
	    //return processResults(results);
	    return results;
	}).then(function(response){
	  	return res.send(response);
	}).catch(next);
}

module.exports = {
	createUser,
	getUsers
}

