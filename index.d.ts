export class GraphQLError extends Error {
    constructor (message: string)
}

export default function graphql (url: string, query: string, variables?: object, headers?: object): Promise<object>
