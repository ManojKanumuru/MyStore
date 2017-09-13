'use strict';

import path from 'path';

const rootpath =  path.normalize(__dirname + '/../../');

let config = {
	development : {
		rootPath : rootpath,
		db : 'mongodb://localhost/myStore',
		port : process.env.NODE_ENV || 3000
	}/*,
	production : {
		rootPath : rootpath,
		db : 'mongodb://manoj:multivision@ds145790.mlab.com:45790/multivision',
		port : process.env.NODE_ENV || 80
	}*/
};

module.exports = config;