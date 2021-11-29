import React from 'react';
import {ActionType} from "./actions";

interface IAction {
    type: ActionType
    payload?: any
}

interface IState {
    city: string
}

interface IContext {
    state: IState
    dispatch: (action: IAction) => void
}

export const initialState: IState = {
    city: ''
}

export const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionType.SetCity:
            return { ...state, city: action.payload }
        default:
            return state;
    }
}

export const Context = React.createContext({} as IContext);
