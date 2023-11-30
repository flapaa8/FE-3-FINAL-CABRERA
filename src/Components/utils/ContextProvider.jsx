import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const initialState = { theme: "light", odontologos: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setState((prevState) => ({ ...prevState, odontologos: res.data }));
      })
      .catch((error) => console.log(error));
  }, []); 

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  return (
    <ContextGlobal.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
