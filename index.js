function fetchGraphQL(url, query, variables, headers) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify({ query, variables })
        })
        .then(response => resolve(response.json()))
        .catch(error => reject(error));
    })
}

export default fetchGraphQL;
