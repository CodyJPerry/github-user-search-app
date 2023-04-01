import React from "react";
import Header from "./components/header/Header.component";
import Search from "./components/search/Search.component";
import ProfileCard from "./components/profilecard/ProfileCard.component";

import "./App.css";

function App() {
  const [user, setUser] = React.useState("");
  const [username, setUsername] = React.useState("octocat");
  const searchInput = React.useRef();

  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Add our user object
        setUser(data);
      })
      .catch();
  }, [username]);

  return (
    <div className="container">
      {/* <Header /> */}
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchInput={searchInput}
      />
      <ProfileCard user={user} />
    </div>
  );
}

export default App;
