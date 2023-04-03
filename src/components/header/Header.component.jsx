import Toggle from "../toggle/Toggle";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header-wrapper">
      <h1 className="title">devfinder</h1>
      <Toggle />
    </header>
  );
};

export default Header;
