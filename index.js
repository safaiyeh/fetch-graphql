export class GraphQLError extends Error {
  constructor (message) {
    super(message)
    this.name = 'GraphQLError'
  }
}

export default async function graphql (url, query, variables, headers) {
  const response = await fetch(url, {
    body: JSON.stringify({ query, variables }),
    headers: { 'Content-Type': 'application/json', ...headers },
    method: 'POST'
  })

  if (response.status < 200 || response.status >= 300) {
    const body = await response.text()
    throw new Error(`GraphQL query failed with status ${response.status}:\n\n${body}`)
  }

  const { data, errors } = await response.json()

  if (errors != null && errors.length > 0) {
    const jsErrors = errors.map((error) => {
      const jsError = new GraphQLError(error.message)

      if (error.locations != null) jsError.locations = error.locations
      if (error.path != null) jsError.path = error.path
      if (error.extensions != null) jsError.extensions = error.extensions

      return jsError
    })

    const jsError = (jsErrors.length > 1) ? new AggregateError(jsErrors) : jsErrors[0]

    if (data != null) {
      jsError.data = data
    }

    throw jsError
  }

  return data
}
