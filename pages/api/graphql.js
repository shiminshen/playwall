import { ApolloServer } from 'apollo-server-micro'
import { makeExecutableSchema } from '@graphql-tools/schema'

import typeDefs from '../../src/gql/typeDefs'
import resolvers from '../../src/gql/resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })
const apolloServer = new ApolloServer({ schema })

const startServer = apolloServer.start()

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
