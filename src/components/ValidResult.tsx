import React from 'react';

const ValidResult = ({data}) => {
    return (
        <div className='result-valid'>
            <div className='result-main'>
                <h2 className='result-city' data-testid='result-city'>{data.getCityByName?.name}</h2>
                <span className='result-description' data-testid='result-description'>{data.getCityByName?.weather?.summary?.description}</span>
                <span className='result-actual' data-testid='result-actual'>
                    {Math.round(data.getCityByName?.weather?.temperature?.actual)}°
                </span>
                <div className='result-min-max'>
                    <span data-testid='result-max'>Max: {Math.round(data.getCityByName?.weather?.temperature?.max)}°</span>
                    <span data-testid='result-min'>Min: {Math.round(data.getCityByName?.weather?.temperature?.min)}°</span>
                </div>
            </div>
            <div className='result-details'>
                <div className='result-details-row'>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Voelt als</span>
                        <span data-testid='result-feels-like' className='result-detail-value'>{Math.round(data.getCityByName?.weather?.temperature?.feelsLike)}°</span>
                    </div>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Wind</span>
                        <span data-testid='result-wind' className='result-detail-value'>{Math.round(data.getCityByName?.weather?.wind?.speed * 3.6)} km/u</span>
                    </div>
                </div>
                <div className='result-details-row'>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Zicht</span>
                        <span data-testid='result-visibility' className='result-detail-value'>{data.getCityByName?.weather?.clouds?.visibility / 1000} km</span>
                    </div>
                    <div className='result-detail'>
                        <span className='result-detail-label'>Vochtigheid</span>
                        <span data-testid='result-humidity' className='result-detail-value'>{data.getCityByName?.weather?.clouds?.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValidResult;
