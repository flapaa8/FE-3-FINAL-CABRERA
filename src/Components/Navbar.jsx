import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider"; 

const Navbar = () => {
  const { theme, toggleTheme } = useContextGlobal();

  const applyTheme = () => {
    document.body.style.backgroundColor = theme === "light" ? "lightGrey" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  };

  const navbarStyle = {
    backgroundColor: theme === "light" ? "lightGrey" : "black",
    color: theme === "light" ? "black" : "white",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
    alignItems: "center",
  };

  return (
    <>
      <nav>
        <div style={navbarStyle}>
          <div>Odontologia Cabrera</div>
          <div>
            <Link to="/">Home </Link>
            <Link to="/contact">Contact </Link>
            <Link to="/favs">Favs </Link>
            <button onClick={() => {
              toggleTheme();
              applyTheme(); 
            }}>Theme</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
