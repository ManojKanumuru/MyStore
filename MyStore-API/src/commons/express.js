'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

let expressMethods = function(){

};

expressMethods.prototype.sampleMethod = function(app, config){
	app.use(logger('dev'));
	app.use(cookieParser());
	//app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
}
module.exports = express;