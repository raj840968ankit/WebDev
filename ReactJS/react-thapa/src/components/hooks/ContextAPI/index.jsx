// import { createContext, useContext } from "react";
import { createContext} from "react";

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