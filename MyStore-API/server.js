'use strict';

import logger from './src/util/logger';

import express from 'express';

let app = express();

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

logger.info(`env is :${env}`);

let config = require('./src/commons/config.js');

require('./src/commons/express.js')(app,config);

require('./src/commons/routes.js')(app);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  logger.info(`Server running at http://${hostname}:${port}/`);
});

/*var config = require('./server/config/config.js')[env];

require('./server/config/mongoose.js')(config);

*/