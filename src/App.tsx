import React from "react";
import Header from "./components/header/Header.component";
import Search from "./components/search/Search.component";
import ProfileCard from "./components/profilecard/ProfileCard.component";

// Style imports
import './styles/base.scss';
import './styles/light-theme.scss';
import './styles/dark-theme.scss';
import './styles/prefers-color-scheme.scss';

function App(): React.FC {
  const [userData, setUserData] = React.useState("");
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [username, setUsername] = React.useState("octocat");
  const searchInput = React.useRef();

  const handleToggle = () => {
    setIsDarkMode(darkMode => !darkMode);
  }

  React.useEffect(() => {
    const fetchInfo = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        // We want to check if the request was valid or not before continuing
        if(res.status !== 200) {
          throw new Error();
        }
        const json = await res.json();
        setUserData(json);
      } catch (error) {
        console.log(
          "Error in API request, please ensure the url is valid.",
        );
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchInfo();
  }, [username]);

  console.log('Dark mode =>', isDarkMode);

  return (
    <main className={isDarkMode ? 'dark' : 'light'}>
      <div className="container">
        <Header isDarkMode={isDarkMode} setDarkMode={handleToggle} />
        <Search 
          updateUsername={setUsername} 
          searchInput={searchInput}
          hasError={hasError} />
        <ProfileCard user={userData} /> 
      </div>
    </main>
  );
}

export default App;
