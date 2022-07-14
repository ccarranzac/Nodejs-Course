const http = require("http");

const routes = require("./routes");

console.log(routes.someText);
//execute this function with every incoming request
const server = http.createServer(routes.handler);

server.listen(3000);
