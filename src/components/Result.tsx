import React from 'react';
import {PreloadedQuery, usePreloadedQuery} from "react-relay";
import type {AppWeatherQuery as AppWeatherQueryType} from "../__generated__/AppWeatherQuery.graphql";
import {WeatherQuery} from "../App";

interface IProps {
    queryReference: PreloadedQuery<AppWeatherQueryType>
}

const Result = ({ queryReference }: IProps) => {
    const data = usePreloadedQuery<AppWeatherQueryType>(WeatherQuery, queryReference)

    return (
        <div>
            <h1>{data.getCityByName?.name}</h1>
            <p>{data.getCityByName?.weather?.summary?.description}</p>
            <p>{data.getCityByName?.weather?.temperature?.actual}</p>
        </div>
    )
}

export default Result
