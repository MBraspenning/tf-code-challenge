import React, {ReactElement, useReducer} from "react";
import { render as tlRender } from '@testing-library/react';
import {Context, IAction, IState, reducer} from "../store/store";

export const render = (ui: ReactElement, initialState: IState, mockDispatch: React.Dispatch<IAction> = null) => {
    function Wrapper({ children }) {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <Context.Provider value={{ state, dispatch: mockDispatch ?? dispatch }}>
                {children}
            </Context.Provider>
        )
    }

    return {
        ...tlRender(ui, {
            wrapper: Wrapper
        })
    }
}
