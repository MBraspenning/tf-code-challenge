import {initialState, reducer} from "./store";
import {ActionType} from "./actions";

describe('Store', () => {
    it('Should update correctly when SetCity is dispatched', () => {
        expect(reducer(initialState, { type: ActionType.SetCity, payload: 'Antwerpen' })).toEqual({ city: 'Antwerpen' });
    });
});
