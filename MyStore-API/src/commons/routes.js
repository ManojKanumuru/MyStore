'use strict';

import logger from '../util/logger';

module.exports = function(app){

	app.get('/status', (req,res) =>{
		res.sendStatus(200);
	});
}