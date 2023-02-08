import React from 'react';
// Import Components
import Header from './components/header/Header.component';
import Search from './components/search/Search.component';
import ProfileCard from './components/profilecard/ProfileCard.component';

import './App.css';

function App() {
  return (
    <div class="container">
      <Header />
      <Search />
      <ProfileCard />
    </div>
  );
}

export default App;
