const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();

// Modifiy this variable and add it as a corsOption parameter.
const allowedHosts = [];
server.use(cors());

const router = jsonServer.router('db.json');
