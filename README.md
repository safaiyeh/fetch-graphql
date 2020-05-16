# fetch-graphql
Super simple GraphQL fetch client

## Installing
`yarn add fetch-graphql`

## Usage
```javascript

import fetchGraphQL from 'fetch-graphql';
const query = `
  query getAllUsers {
      listAllUsers {
        items {
          uid
        }
      }
    }
`;
const variables = `
{
  "createUser": {
    "uid": "Safaiyeh"
  }
}
`
const data = await fetchGraphQL(
  'https://yourAPI.com/graphql', 
  query,
  variables,
  { 'header1': 'headerValue1', ...headers }
);

```

## AWS AppSync
Pass your API Key to x-api-key header
```javascript
const headers = {
  'x-api-key': '<AWS KEY HERE>'
}
```
