import SunIcon from "../../assets/icon-sun.svg";
import "./toggle.styles.scss";

const Toggle = () => (
  <div className="toggle-wrapper">
    <span>Light</span>
    <img src={SunIcon} alt="Icon of a sun" />
  </div>
);

export default Toggle;
