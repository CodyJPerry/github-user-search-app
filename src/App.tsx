import React from "react";
import Header from "./components/header/Header.component";
import Search from "./components/search/Search.component";
import ProfileCard from "./components/profilecard/ProfileCard.component";
import { UserData } from "./interfaces";

// Style imports
import './styles/base.scss';
import './styles/light-theme.scss';
import './styles/dark-theme.scss';

function App(): JSX.Element {
  const [userData, setUserData] = React.useState<UserData>({
      login: "Octocat",
      name: "",
      bio: "",
      created_at: new Date(),
      public_repos: 0,
      followers: 0,
      location: "",
      blog: "",
      company: "",
      twitter_username: "",
      following: 0, 
      avatar_url: "",
      url: ""
  });
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("octocat");
  const searchInput = React.useRef<HTMLInputElement>(null);

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

  return (
    <main className={isDarkMode ? 'dark' : 'light'}>
      <div className="container">
        <Header 
          isDarkMode={isDarkMode} 
          toggleMode={handleToggle} 
        />
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
