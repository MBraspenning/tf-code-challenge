import {RequestParameters, Variables} from "relay-runtime";

const fetchGraphQL = async (operation: RequestParameters, variables: Variables) => {
    const response = await fetch('https://graphql-weather-api.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    });

    return await response.json();
}

export default fetchGraphQL;
