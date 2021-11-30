import React, {ReactElement, useReducer} from "react";
import { render as tlRender } from '@testing-library/react';
import {Context, IState, reducer} from "../store/store";
import {RelayEnvironmentProvider} from "react-relay";
import { createMockEnvironment } from 'relay-test-utils';
import {Environment} from "relay-runtime/lib/store/RelayStoreTypes";
import {IAction} from "../store/actions";

const defaultInitialState = {
    city: ''
}

interface RenderArguments {
    mockInitialState?: IState
    mockDispatch?: React.Dispatch<IAction>
    mockEnvironment?: Environment
}

export const renderWith = ( ui: ReactElement, renderArguments?: RenderArguments) => {
    function wrapper({ children }) {
        const [state, dispatch] = useReducer(reducer, renderArguments?.mockInitialState ?? defaultInitialState);
        return (
            <RelayEnvironmentProvider environment={renderArguments?.mockEnvironment ?? createMockEnvironment()}>
                <Context.Provider value={{ state, dispatch: renderArguments?.mockDispatch ?? dispatch }}>
                    {children}
                </Context.Provider>
            </RelayEnvironmentProvider>
        )
    }

    return {
        ...tlRender(ui, {wrapper})
    }
}
