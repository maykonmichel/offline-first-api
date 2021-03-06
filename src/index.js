import {GraphQLServer} from 'graphql-yoga';

import resolvers from './resolvers';
import db from './configs/db';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: params => ({
    ...params,
    db,
  }),
});

server
  .start(() => console.log('Server is running on http://localhost:4000')) // eslint-disable-line no-console
  .catch(
    err => console.log(`Something went wrong while starting server: ${err}`), // eslint-disable-line no-console
  );
