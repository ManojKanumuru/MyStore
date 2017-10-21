'use strict';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from '../util/logger';

module.exports = function(app, config){
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
}