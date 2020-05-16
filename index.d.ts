declare module 'fetch-graphql' {
    function fetchGraphQL(
        url: string,
        query: string,
        variables?: string,
        headers?: object
    ): Promise<any>
    export = fetchGraphQL;
}