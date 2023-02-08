import React from 'react';
// Import Components
import Header from './components/header/Header.component';
import Search from './components/search/Search.component';
import ProfileCard from './components/profilecard/ProfileCard.component';

import './App.css';

function App() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    /**
     * We need to go get information from the github
     * Using the following API Endpoint: `https://api.github.com/users/:username`
     * REST API Docs: https://docs.github.com/en/rest/users?apiVersion=2022-11-28
     */
  }, [user]);

  console.log(user)
  return (
    <div className="container">
      <Header />
      <Search />
      <ProfileCard />
    </div>
  );
}

export default App;
