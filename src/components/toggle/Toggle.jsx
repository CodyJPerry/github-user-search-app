import SunIcon from "../../assets/icon-sun.svg";
import "./toggle.styles.scss";

const Toggle = ({ isDarkMode, setDarkMode}) => (
  <div className="toggle-wrapper">
    <div 
      onClick={setDarkMode} 
      className="toggle"
    >
        <span>Light</span>
        <img src={SunIcon} alt="Icon of a sun" />
    </div>
  </div>
);

export default Toggle;
