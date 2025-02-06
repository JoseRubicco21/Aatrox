const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('/leaflet-project/backend/db.json'); // Your fake database
const routes = require('/leaflet-project/backend/routes.json'); // Custom routes file

server.use(jsonServer.rewriter(routes)); // Use custom routes
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
