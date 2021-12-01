import React from 'react';
import {PreloadedQuery, usePreloadedQuery} from "react-relay";
import type {AppWeatherQuery as AppWeatherQueryType} from "../__generated__/AppWeatherQuery.graphql";
import {WeatherQuery} from "../App";
import ValidResult from "./ValidResult";
import InvalidResult from "./InvalidResult";

import '../styles/components/Result.scss';

interface IProps {
    queryReference: PreloadedQuery<AppWeatherQueryType>
}

const Result = ({ queryReference }: IProps) => {
    const data = usePreloadedQuery<AppWeatherQueryType>(WeatherQuery, queryReference);

    return (
        <div className='result-card'>
            {
                data.getCityByName ? <ValidResult data={data} /> : <InvalidResult />
            }
        </div>
    )
}

export default Result
