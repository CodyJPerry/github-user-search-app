import React from "react";
import Toggle from "../toggle/Toggle.component";
import "./header.styles.scss";
import { HeaderProps } from "../../interfaces";


const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleMode}): JSX.Element => {
  return (
    <header className="header-wrapper">
      <h1 className="title">devfinder</h1>
      <Toggle isDarkMode={isDarkMode} toggleMode={toggleMode} />
    </header>
  );
};

export default Header;
