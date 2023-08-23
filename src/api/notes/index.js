const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service }) => {
    const noteHandler = new NotesHandler(service);
    server.route(routes(noteHandler));
  },
};
