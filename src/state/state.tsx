import React, { ReactNode } from 'react';
import { Dispatch, createContext } from 'react';
import { useImmerReducer } from 'use-immer';

import { Actions, reducer } from './reducer';

export interface StateInterface {
    demo: string;
}

const initialState: StateInterface = {
    demo: 'meow',
};

interface StateProps {
    children: ReactNode;
}

export const StateContext = createContext<StateInterface>(initialState);
export const DispatchContext = createContext<Dispatch<Actions>>(
    () => undefined
);

export const State = ({ children }: StateProps): JSX.Element => {
    const [state, dispatch] = useImmerReducer(reducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={{ ...state }}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};
