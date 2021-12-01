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
import LoadingIndicator from "./components/LoadingIndicator";

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

            <div className='result-container'>
                <Suspense fallback={<LoadingIndicator />}>
                    {
                        queryReference &&
                        <Result queryReference={queryReference} />
                    }
                </Suspense>
            </div>

            <svg className='background-blob blob-1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.7,-45.6C43.6,-41.7,57.5,-37.1,61.3,-28.2C65.1,-19.2,59,-5.8,56.9,8.1C54.8,22,56.7,36.4,51,45.9C45.4,55.4,32.2,59.9,18.6,64.3C5.1,68.7,-8.8,72.9,-21.2,70.2C-33.7,67.5,-44.7,57.9,-50,46.3C-55.3,34.8,-55,21.3,-58.6,7.4C-62.3,-6.6,-69.9,-21,-68.5,-34.2C-67,-47.4,-56.4,-59.3,-43.5,-62.7C-30.5,-66,-15.3,-60.8,-2.7,-56.6C9.9,-52.5,19.8,-49.4,31.7,-45.6Z" transform="translate(100 100)" />
            </svg>

            <svg className='background-blob blob-2' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.7,-73C61.5,-67.6,69,-51.3,76.2,-35C83.5,-18.6,90.4,-2.3,87.2,11.8C84,25.9,70.7,37.8,57.9,47.3C45.2,56.8,33,63.9,18.8,71.4C4.6,78.9,-11.6,86.9,-24.1,82.9C-36.6,78.8,-45.3,62.8,-54,48.9C-62.6,35,-71.3,23.3,-75,9.7C-78.7,-3.9,-77.4,-19.4,-71.2,-32.3C-65,-45.3,-53.8,-55.8,-41.1,-61.3C-28.4,-66.7,-14.2,-67.1,1.9,-70.1C18,-73,36,-78.5,48.7,-73Z" transform="translate(100 100)" />
            </svg>

            <svg className='background-blob blob-3' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,-56.7C62.3,-49.3,67.9,-31.1,70.9,-12.7C73.8,5.6,74,24.2,66,38.2C58.1,52.1,41.9,61.4,24.2,68.9C6.5,76.3,-12.7,81.9,-26.6,75.7C-40.5,69.5,-49.1,51.4,-54.3,35C-59.4,18.5,-61.2,3.7,-61.9,-14.2C-62.6,-32.1,-62.4,-53,-51.9,-60.8C-41.4,-68.5,-20.7,-63.1,-0.9,-62C18.9,-60.9,37.7,-64.2,50,-56.7Z" transform="translate(100 100)" />
            </svg>
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
