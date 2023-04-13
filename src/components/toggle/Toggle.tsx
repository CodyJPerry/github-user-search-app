import React from "react";
import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";

import "./toggle.styles.scss";

const Toggle = ({ isDarkMode, setDarkMode}) => {
  const handleColorScheme = () => {
    // Check what color scheme the users device has set and update state
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setDarkMode(false);
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      event.matches ? setDarkMode(true) : setDarkMode(false);
    });
  }

  return (
      <div className="toggle-wrapper">
      <div 
        onClick={handleColorScheme} 
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
}

export default Toggle;
