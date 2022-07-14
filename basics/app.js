const http = require("http");

//execute this function with every incoming request
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from Nodejs server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
