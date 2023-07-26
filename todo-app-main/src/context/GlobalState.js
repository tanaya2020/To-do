import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";
import { setTasks } from "./GlobalAction";

const initialState = {
  tasks: [],
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  useEffect(() => {
    setTasks(dispatch);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const { state, dispatch } = useContext(GlobalContext);
  return { ...state, dispatch };
};
