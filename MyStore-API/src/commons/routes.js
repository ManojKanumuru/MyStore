'use strict';

let user = require('./../model/userModel');

module.exports = function(app){

	app.post('/myStore/users', user.createUser);

	app.get('/myStore/login', user.getUsers);
}