'use strict';

import mongoose from 'mongoose';

module.exports = function(config){

	mongoose.connect(config.db,{useMongoClient: true});
	let db = mongoose.connection;
	db.on('error',console.error.bind(console,'connection error...'));
	db.once('openUri',function callback(){
		console.log('myStore db connected...');
	});
}