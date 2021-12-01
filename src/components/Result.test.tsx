import React from 'react';
import Result from "./Result";
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import {renderWith} from "../utils/TestUtils";
import {loadQuery} from "react-relay";
import compiledQuery, {AppWeatherQuery} from "../__generated__/AppWeatherQuery.graphql";

const {Suspense} = React;

describe('Result', () => {
    it('Should render based on query result', () => {
        const mockEnvironment = createMockEnvironment();

        mockEnvironment.mock.queueOperationResolver(operation => {
            return MockPayloadGenerator.generate(operation, {
                City() {
                    return {
                        name: 'Antwerpen',
                        country: 'BE',
                        weather: {
                            summary: {
                                title: 'Bewolkt',
                                description: 'Licht bewolkt met kans op neerslag',
                                icon: '#123'
                            },
                            temperature: {
                                actual: 5.00,
                                feelsLike: 4.00,
                                min: 3.00,
                                max: 6.00
                            },
                            wind: {
                                speed: 1
                            },
                            clouds: {
                                visibility: 10000,
                                humidity: 50
                            }
                        }
                    }
                }
            });
        });

        mockEnvironment.mock.queuePendingOperation(compiledQuery, { city: 'Antwerpen' });

        const queryRef = loadQuery<AppWeatherQuery>(mockEnvironment, compiledQuery, { city: 'Antwerpen' });

        const component = (
            <Suspense fallback={'Loading...'}>
                <Result queryReference={queryRef} />
            </Suspense>
        )
        const { getByTestId } = renderWith(component, { mockEnvironment });

        expect(getByTestId('result-city')).toHaveTextContent('Antwerpen');
        expect(getByTestId('result-description')).toHaveTextContent('Licht bewolkt met kans op neerslag');
        expect(getByTestId('result-actual')).toHaveTextContent('5°');
        expect(getByTestId('result-max')).toHaveTextContent('6°');
        expect(getByTestId('result-min')).toHaveTextContent('3°');
        expect(getByTestId('result-feels-like')).toHaveTextContent('4°');
        expect(getByTestId('result-wind')).toHaveTextContent('4 km/u');
        expect(getByTestId('result-visibility')).toHaveTextContent('10 km');
        expect(getByTestId('result-humidity')).toHaveTextContent('50%');
    });

    it('Should render message for invalid city', () => {
        const mockEnvironment = createMockEnvironment();

        mockEnvironment.mock.queueOperationResolver(operation => {
            return {
                data: {
                    getCityByName: null
                }
            }
        });


        mockEnvironment.mock.queuePendingOperation(compiledQuery, { city: 'Invalid' });

        const queryRef = loadQuery<AppWeatherQuery>(mockEnvironment, compiledQuery, { city: 'Invalid' });

        const component = (
            <Suspense fallback={'Loading...'}>
                <Result queryReference={queryRef} />
            </Suspense>
        )
        const { getByTestId } = renderWith(component, { mockEnvironment });

        expect(getByTestId('result-invalid')).toBeInTheDocument();
    });
});
