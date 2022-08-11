import React, { createContext, useReducer } from "react";
import { Action, AppState } from "../../declarations";
import { initialState, reducer } from "../reducer/reducer";

interface TodoContextProps {
  children: React.ReactNode
}

const TodoContext = createContext<{
  state: AppState,
  dispatch: React.Dispatch<Action>
}>({ state: initialState, dispatch:() => {}});

const TodoContextProvider = ({children}: TodoContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value={{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}

export  { TodoContext, TodoContextProvider };