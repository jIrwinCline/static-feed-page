import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Bio from './Bio';
import FeedList from './FeedList';
import RecommendedList from './RecommendedList';

function App() {
  return (
    <div>
      <Navbar/>

      <hr/>
      <Profile/>
      <Bio/>
      <FeedList/>
      <RecommendedList/>
    </div>
  );
}

export default App;
