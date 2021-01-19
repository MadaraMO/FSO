import React, { createContext, useContext, useReducer } from "react";
import { Patient, Diagnosis } from "../types";

import { Action } from "./reducer";

export type State = {
  patients: { [id: string]: Patient };
  // kad apjuku, sāku norakstīt no šīs vietas, tad pamazām sāku saprast un modificēt
  singlePatient: Patient | undefined;
  diagnosis: { [code: string]: Diagnosis };
};

const initialState: State = {
  patients: {},
  singlePatient: undefined,
  diagnosis: {},
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children,
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
