import React from "react";
import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";

import "./toggle.styles.scss";

const Toggle = ({ isDarkMode, setDarkMode}) => (
  <div className="toggle-wrapper">
    <div 
      onClick={setDarkMode} 
      className="toggle"
    >
    {isDarkMode ? (
      <React.Fragment>
        <span>Light</span>
        <img src={SunIcon} alt="Icon of a sun" />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <span>Dark</span>
        <img src={MoonIcon} alt="Icon of a moon" />
      </React.Fragment>
    )}
    </div>
  </div>
);

export default Toggle;
