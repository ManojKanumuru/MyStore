'use strict';

import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');

module.exports = function(config){

	mongoose.connect(config.db,{useMongoClient: true});
	let db = mongoose.connection;
	db.on(`error`,console.error.bind(console,`connection error...`));
	db.once(`open`,function callback(){
		console.log(`myStore db connected...`);
	});
}
