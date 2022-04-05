import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-micro'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })
const server = new ApolloServer({
	schema
})

const gqlServer = (httpServer) => {
  // Creating the WebSocket server
  const wsServer = new WebSocketServer({
    // This is the `httpServer` we created in a previous step.
    server: httpServer,
    // Pass a different path here if your ApolloServer serves at
    // a different path.
    path: '/graphql'
  })

  // Hand in the schema we just created and have the
  // WebSocketServer start listening.
  const serverCleanup = useServer({ schema }, wsServer)

  const server = new ApolloServer({
    schema,
  })

  return server
};

export default gqlServer
