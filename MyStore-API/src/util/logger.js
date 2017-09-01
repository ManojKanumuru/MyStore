'use strict';

import winston from 'winston';

const logger = new (winston.Logger)({
	colors : {
		error : 'red',
	    warn : 'yellow',
	    info : 'green',
	},
	levels : {
	    error : 0,
	    warn : 1,
	    info : 2,
  },
    transports: [
      new (winston.transports.Console)({
      	colorize: true,
      	timestamp:true
      }),
      new (winston.transports.File)({ filename: 'demo.log' })
    ]
  });

module.exports = logger;