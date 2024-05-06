const fastify = require('fastify')({logger:true});
import { DataBaseMemory } from './database-memory.js';

const PORT = 3000;
const HOST = '0.0.0.0';

//POST localhost:3000/videos
//PUT localhost:3000/videos/1

fastify.get('/videos', () => {
  return 'Hello World'
});

fastify.put('/videos/:id', () => {
  return 'Hello Node.js'
})

fastify.delete('/videos/:id', () => {
  return 'Hello Node.js'
})

fastify.listen(PORT, HOST, (err,address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});

