import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const hostUrl = 'http://34.203.218.6:8000/';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: hostUrl + 'subgraphs/name/okboy/okswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://health.mdex.com/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: hostUrl +  'subgraphs/name/okboy/okswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: hostUrl +  'subgraphs/name/okboy/okswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: hostUrl + 'subgraphs/name/okboy/okswap',
  }),
  cache: new InMemoryCache(),
})
