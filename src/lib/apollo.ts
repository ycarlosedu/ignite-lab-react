import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_URL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_GRAPHCMS}`,
  },
  cache: new InMemoryCache(),
});
