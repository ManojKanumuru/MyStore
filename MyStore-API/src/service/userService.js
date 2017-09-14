'use strict';

import userModel from './../model/userModel';

import q from 'q';

function getUserList(req, res){
	
	userModel.getUsers(req, res, (err, response) => {
		console.log("inside service response---->>>>:"+JSON.stringify(response));
		console.log("inside service response---->>>>:"+JSON.stringify(res));
		res.send(response);
	});
}

module.exports = {
	getUserList
}