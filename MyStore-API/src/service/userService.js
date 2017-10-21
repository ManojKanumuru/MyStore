'use strict';

import q from 'q';

import _ from 'underscore';

let user = require('./../model/userModel');

function createUserMethod(req){
	console.log("inside createUserMethod:");
	let deferred = q.defer();

	user.createUser(req).then(function(response){
		console.log("after getting final response");
		deferred.resolve(response);
	});
	return deferred.promise;
}

function getUserDetails(req){
	console.log("inside getUserDetails method");
	let deferred = q.defer();
	user.getUsers(req).then(function(response){
		console.log("inside user result---->>>:");
		let finalResult = _.pluck(response,'Email');
		deferred.resolve(finalResult);
	});
	return deferred.promise;
}

module.exports = {
	createUserMethod,
	getUserDetails
}