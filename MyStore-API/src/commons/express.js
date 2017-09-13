'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from '../util/logger';


module.exports = function(app, config){
	//app.use(logger('dev'));
	app.use(cookieParser());
	//app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
}