# fetch-graphql

Super simple GraphQL fetch client, with built in error handling.

## Installing

```sh
npm add fetch-graphql
```

## Usage

```javascript
import fetchGraphQL from 'fetch-graphql'

const query = `
  query ListUsers($filter: UserFilter) {
    users(filter: $filter) {
      id

      firstName
      lastName
    }
  }
`

const variables = {
  filter: {
    firstName: 'Safaiyeh'
  }
}

const data = await fetchGraphQL(
  'https://yourAPI.com/graphql',
  query,
  variables,
  { 'header1': 'headerValue1', ...headers }
)

console.log(data.users)
```

## Error handling

If the GraphQL response contains errors, the returned `Promise` will reject with a fully populated error. If there was multiple errors, it rejects with an [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) that contains all the errors.

## AWS AppSync

Pass your API Key to x-api-key header

```javascript
const headers = {
  'x-api-key': '<AWS KEY HERE>'
}
```
