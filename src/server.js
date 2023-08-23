const Hapi = require('@hapi/hapi');
const NotesService = require('./services/inMemory/NotesService');
const notes = require('./api/notes');

const init = async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
