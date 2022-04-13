// lib/withApollo.js
import React from 'react'
import withApollo from 'next-with-apollo'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
})

// fix createClient failed at ssr
// ref: https://github.com/apollographql/subscriptions-transport-ws/issues/333#issuecomment-359261024
const wsLink = process.browser
  ? new GraphQLWsLink(
      createClient({
        lazy: true,
        url: 'ws://localhost:3000/subscriptions',
      }),
    )
  : () => {}

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  // Make sure the wsLink is only created on the browser. The server doesn't have a native implemention for websockets
  wsLink,
  httpLink,
)

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache().restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  },
)
