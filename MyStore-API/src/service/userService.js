'use strict';

import userModel from './../model/userModel';

import q from 'q';

function getUserList(req,res,next){

	let onGettingUserList = (err, response) => {
		if(err){
			return next(err);
		}else{
			return next(response);
		}
	};

	userModel.getUsers(req, onGettingUserList);
}

/*let deferred = q.defer();

userModel.getUsers().then(function(response){
	deferred.resolve(response);
	return deferred.promise();
});*/

module.exports = {
	getUserList
}