import React from 'react';
import UserInput from "./UserInput";
import {renderWith} from "../utils/TestUtils";
import {fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {ActionType} from "../store/actions";

describe('UserInput', () => {
    it('Should autofocus text input', () => {
        const { getByTestId } = renderWith(<UserInput />);

        expect(getByTestId('city-input')).toHaveFocus();
    });

    it('Should clear text input with Escape key', () => {
        const { getByTestId } = renderWith(<UserInput />, { mockInitialState: { city: 'Antwerp' } });

        expect(getByTestId('city-input')).toHaveValue('Antwerp');

        fireEvent.keyDown(getByTestId('city-input'), {key: 'Escape'});

        expect(getByTestId('city-input')).toHaveValue('');
    });

    it('Should clear text input with clear button', () => {
        const { getByTestId } = renderWith(<UserInput />, { mockInitialState: { city: 'Antwerp' } });

        expect(getByTestId('city-input')).toHaveValue('Antwerp');

        userEvent.click(getByTestId('city-clear'));

        expect(getByTestId('city-input')).toHaveValue('');
    });

    it('Should submit value with Enter key', () => {
        const mockDispatch = jest.fn();

        const { getByTestId } = renderWith(<UserInput />, { mockDispatch });

        userEvent.type(getByTestId('city-input'), 'Antwerp');
        fireEvent.keyDown(getByTestId('city-input'), {key: 'Enter'});

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({ type: ActionType.SetCity, payload: 'Antwerp' });
    });

    it('Should submit value with submit button', () => {
        const mockDispatch = jest.fn();

        const { getByTestId } = renderWith(<UserInput />, { mockDispatch });

        userEvent.type(getByTestId('city-input'), 'Antwerp');
        userEvent.click(getByTestId('city-submit'));

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({ type: ActionType.SetCity, payload: 'Antwerp' });
    });
});
