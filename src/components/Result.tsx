import React from 'react';
import {PreloadedQuery, usePreloadedQuery} from "react-relay";
import type {AppWeatherQuery as AppWeatherQueryType} from "../__generated__/AppWeatherQuery.graphql";
import {WeatherQuery} from "../App";

import '../styles/components/Result.scss';

interface IProps {
    queryReference: PreloadedQuery<AppWeatherQueryType>
}

const Result = ({ queryReference }: IProps) => {
    const data = usePreloadedQuery<AppWeatherQueryType>(WeatherQuery, queryReference)

    return (
        <div className='result-card'>
            <div className='result-main'>
                <h2 className='result-city' data-testid='result-city'>{data.getCityByName?.name}</h2>
                <span className='result-description' data-testid='result-description'>{data.getCityByName?.weather?.summary?.description}</span>
                <span className='result-actual' data-testid='result-actual'>
                    {Math.round(data.getCityByName?.weather?.temperature?.actual)}°
                </span>
                <div className='result-min-max'>
                    <span>Max: {Math.round(data.getCityByName?.weather?.temperature?.max)}°</span>
                    <span>Min: {Math.round(data.getCityByName?.weather?.temperature?.min)}°</span>
                </div>
            </div>
            <div className='result-details'>
                <div className='result-details-row'>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Voelt als</span>
                        <span className='result-detail-value'>{Math.round(data.getCityByName?.weather?.temperature?.feelsLike)}°</span>
                    </div>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Wind</span>
                        <span className='result-detail-value'>{Math.round(data.getCityByName?.weather?.wind?.speed * 3.6)} km/u</span>
                    </div>
                </div>
                <div className='result-details-row'>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Zicht</span>
                        <span className='result-detail-value'>{data.getCityByName?.weather?.clouds?.visibility / 1000} km</span>
                    </div>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Vochtigheid</span>
                        <span className='result-detail-value'>{data.getCityByName?.weather?.clouds?.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
