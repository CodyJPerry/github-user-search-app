import Toggle from "../toggle/Toggle";
import "./header.styles.scss";

const Header = ({ isDarkMode, setDarkMode }) => {
  return (
    <header className="header-wrapper">
      <h1 className="title">devfinder</h1>
      <Toggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </header>
  );
};

export default Header;
