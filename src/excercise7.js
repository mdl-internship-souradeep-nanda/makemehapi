const Hapi = require('hapi');

const server = new Hapi.Server();
const handlebars = require('handlebars');
const path = require('path');

let port = 8080;

if (!module.parent) {
  port = Number(process.argv[2]);
}

server.connection({
  host: 'localhost',
  port,
});

server.register(require('vision'), (err) => {
  if (err) throw err;
  server.views({
    engines: {
      html: handlebars,
    },
    path: __dirname,
    helpersPath: path.join(__dirname + './../helpers'),
  });

  server.route({
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply.view('template7');
    },
  });
});

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
