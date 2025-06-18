// import { createContext, useContext } from "react";
import { createContext, useContext} from "react";

// 1 step - create context component

export const BioContext = createContext();

// 2nd step - pass the value to the provider inside curly braces
// 3rd step - wrap the component inside BioProvider in App.jsx
export const BioProvider = ({ children }) => {
  const myName = "vinod";
  const myAge = 30;

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};


//! Creating custom hooks here and use whereEver you are using BioContext(Home.jsx)
export const useBioContext = () => {
    const context = useContext(BioContext)
    return context
}