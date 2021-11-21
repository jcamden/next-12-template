import { StateInterface } from './state';

export enum ActionNames {
    setDemo = 'setDemo',
}

export type Actions = {
    name: ActionNames.setDemo;
    payload: string;
};

const reducerCases = {
    setDemo: (draft: StateInterface, action: Actions) =>
        (draft.demo = action.payload),
};

export const reducer = (draft: StateInterface, action: Actions): void => {
    reducerCases[action.name](draft, action);
};
