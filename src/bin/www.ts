import * as http from 'http';
import debug from 'debug';
import * as api from '../api';
import * as config from '../../config/config';

/**
 * Module dependencies.
 */

// const debug = require('debug')('jrs:server');
// const app = require('../App');

/**
 * Create HTTP server.
 */
const server: http.Server = http.createServer(api.default);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(port : number) {
  // const portCheck = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return port;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(3000);
// api.set('port', port); 

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error:NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  console.log('getting error');

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      // eslint-disable-next-line no-fallthrough
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      // eslint-disable-next-line no-fallthrough
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  console.log(`Listening on ${bind}`);
  debug(`Listening on ${bind}`);
}

// app.get('/', (req: express))

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
