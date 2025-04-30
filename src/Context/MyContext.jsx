import { createContext, useContext } from "react";

// Create a context for the application with an initial state
export const MyContext = createContext();

// Create ContextProvider to provide the context to components
export const ContextProvider = MyContext.Provider;

// Create a custom hook to use the context easily in components
export const UseContext = () => {
  return useContext(MyContext);
};
