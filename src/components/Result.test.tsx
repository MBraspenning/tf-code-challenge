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
        expect(getByTestId('result-actual')).toHaveTextContent('5');
    });
});
