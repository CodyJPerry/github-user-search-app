import React from "react";
import Header from "./components/header/Header.component";
import Search from "./components/search/Search.component";
import ProfileCard from "./components/profilecard/ProfileCard.component";

import "./App.css";

function App() {
  const [userData, setUserData] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [username, setUsername] = React.useState("octocat");
  const searchInput = React.useRef();

  React.useEffect(() => {
    const fetchInfo = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const json = await res.json();
        setUserData(json);
      } catch (error) {
        console.log(
          "Error in API request, please ensure the url is valid. =>",
          error
        );
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchInfo();
  }, [username]);

  return (
    <div className="container">
      <Header />
      <Search updateUsername={setUsername} searchInput={searchInput} />
      <ProfileCard user={userData} />
    </div>
  );
}

export default App;
