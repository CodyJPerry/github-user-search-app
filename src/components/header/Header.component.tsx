import React from "react";
import Toggle from "../toggle/Toggle";
import "./header.styles.scss";
import { HeaderProps } from "../../interfaces";


const Header: React.FC<HeaderProps> = ({ isDarkMode, setDarkMode }) => {
  return (
    <header className="header-wrapper">
      <h1 className="title">devfinder</h1>
      <Toggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </header>
  );
};

export default Header;
