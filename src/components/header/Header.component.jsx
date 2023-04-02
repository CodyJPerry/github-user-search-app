import Toggle from "../toggle/Toggle";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header-wrapper">
      <h2 className="title">devfinder</h2>
      <Toggle />
    </header>
  );
};

export default Header;
