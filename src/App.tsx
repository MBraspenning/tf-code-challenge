import React, {useContext, useEffect, useReducer} from 'react';
import './App.scss';
import {graphql} from 'babel-plugin-relay/macro';
import {
    RelayEnvironmentProvider,
} from 'react-relay/hooks';
import RelayEnvironment from './API/RelayEnvironment';
import UserInput from "./components/UserInput";
import {Context, initialState, reducer} from "./store/store";
import Result from "./components/Result";
import {useQueryLoader} from "react-relay";
import type {AppWeatherQuery as AppWeatherQueryType} from "./__generated__/AppWeatherQuery.graphql";
import Header from "./components/Header";

const {Suspense} = React;

export const WeatherQuery = graphql`
    query AppWeatherQuery ($city: String!) {
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
                wind {
                    speed
                }
                clouds {
                    all
                    visibility
                    humidity
                }
            }
        }
    }
`;

function App() {
    const [queryReference, loadQuery] = useQueryLoader<AppWeatherQueryType>(WeatherQuery);
    const context = useContext(Context);
    const { state } = context;

    useEffect(() => {
        loadQuery({ city: state.city });
    }, [loadQuery, state.city])

    return (
        <div className="App">
            <Header />

            <UserInput />

            <Suspense fallback={'Loading...'}>
                {
                    queryReference &&
                    <Result queryReference={queryReference} />
                }
            </Suspense>
        </div>
    );
}

function AppRoot() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Context.Provider value={{ state, dispatch }}>
                <App />
            </Context.Provider>
        </RelayEnvironmentProvider>
    );
}

export default AppRoot;
