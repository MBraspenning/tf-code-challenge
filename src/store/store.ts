import React from 'react';
import {ActionType} from "./actions";

export interface IAction {
    type: ActionType
    payload?: any
}

export interface IState {
    city: string
}

export interface IContext {
    state: IState
    dispatch: React.Dispatch<IAction>
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
