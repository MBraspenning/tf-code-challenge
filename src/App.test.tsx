import React from 'react';
import App from './App';
import {renderWith} from "./utils/TestUtils";

describe('App', () => {
    it('Should display loading indicator on initial render', () => {
        const { getByTestId } = renderWith(<App />);

        expect(getByTestId('loading-indicator')).toBeInTheDocument();
    });
});
