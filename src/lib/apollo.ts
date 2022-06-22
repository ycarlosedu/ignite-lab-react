import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pviawi2fvj01xs1o2p74ht/master',
  cache: new InMemoryCache(),
});
