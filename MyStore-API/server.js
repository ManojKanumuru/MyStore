'use strict';

import logger from './src/util/logger';

import express from 'express';

let app = express();

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

logger.info(`env is :${env}`);

const hostname = '127.0.0.1',port = 3000;

let config = require('./src/commons/config.js')[env];

require('./src/commons/express.js')(app,config);

require('./src/commons/routes.js')(app);

require('./src/db/mongoose.js')(config);

app.listen(port, hostname, () => {
  logger.info(`Server running at http://${hostname}:${port}/`);
});