const fastify = require('fastify')({logger:true});

const PORT = 3000;
const HOST = '0.0.0.0';

fastify.get('/', () => {
  return 'Hello World';
});

fastify.get('/teste', () => {
  return 'Hello Matheus';
});

fastify.get('/node', () => {
  return 'Faz o L';
});


fastify.listen(PORT, HOST, (err,address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});

