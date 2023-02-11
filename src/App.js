import React from 'react';
// Import Components
import Header from './components/header/Header.component';
import Search from './components/search/Search.component';
import ProfileCard from './components/profilecard/ProfileCard.component';

import './App.css';

function App() {
  const [user, setUser] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
     /**
      * We need to go get information from the github
      * Using the following API Endpoint: `https://api.github.com/users/:username`
     * REST API Docs: https://docs.github.com/en/rest/users?apiVersion=2022-11-28
     */

     fetch(`https://api.github.com/users/octocat`)
       .then(res => res.json())
       .then(data => {
         console.log(data);
         // Add our user object
        setUser(data);
       })
       .catch();

  }, []);

  return (
    <div className="container">
      {/* <Header /> */}
      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <ProfileCard user={user} />
    </div>
  );
}

export default App;
