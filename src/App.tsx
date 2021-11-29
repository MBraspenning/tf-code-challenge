import React, {useReducer} from 'react';
import './App.css';
import {graphql} from 'babel-plugin-relay/macro';
import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery, PreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import UserInput from "./components/UserInput";
import {Context, initialState, reducer} from "./store/store";

const {Suspense} = React;

const HoogstratenWeatherQuery = graphql`
    query AppHoogstratenWeatherQuery ($city: String!) {
        getCityByName (name: $city, config: {units: metric, lang: nl}) {
            name
            country
            weather {
                summary {
                    title
                    description
                    icon
                }
                temperature {
                    actual
                    feelsLike
                    min
                    max
                }
            }
        }
    }
`;

const preloadedQuery = loadQuery(RelayEnvironment, HoogstratenWeatherQuery, {city: "Hoogstraten"});

interface AppProps {
    preloadedQuery: PreloadedQuery<any>
}

function App(props: AppProps) {
    const data = usePreloadedQuery(HoogstratenWeatherQuery, props.preloadedQuery);

    return (
        <div className="App">
            <UserInput />

            <h1>{data.getCityByName.name}</h1>
            <p>{data.getCityByName.weather.summary.description}</p>
        </div>
    );
}

function AppRoot() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Context.Provider value={{ state, dispatch }}>
                <Suspense fallback={'Loading...'}>
                    <App preloadedQuery={preloadedQuery}/>
                </Suspense>
            </Context.Provider>
        </RelayEnvironmentProvider>
    );
}

export default AppRoot;
