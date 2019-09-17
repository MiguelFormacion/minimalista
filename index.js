const chalk = require('chalk');
console.log(chalk.blue('Hola mundo'));

const http = require("http");
const handler = (request, response) => {
  console.log('Recibimos peticion');
  response.end("<p>Hola Mundo web</p>");

  response.end(chalk.blue("fdfafasdfasdf"));

  }
const server = http.createServer(handler);
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
