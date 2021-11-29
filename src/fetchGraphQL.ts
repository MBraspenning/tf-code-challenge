import {Variables} from "relay-runtime";

const fetchGraphQL = async (query: string | null | undefined, variables: Variables) => {
    const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    return await response.json();
}

export default fetchGraphQL;
