import React from 'react';
import defaultProfile from '../assets/images/default-profile.png';

function Profile() {
  var card = {
    border: 'solid 1.5px lightgray',
    width: '250px',
  };

  var profile = {
    width: '100px',
    position: 'relative',
    border: 'solid, 1px, white',
    borderRadius: '10px',
  };
  return (
    <div style={card}>
      <img src='#' ></img>
      <img style={profile} src={defaultProfile} ></img>
      <p>First Last</p>
      <ul>
        <li>Tweets</li>
        <li>Following</li>
        <li>Followers</li>
      </ul>
      </div>
  );
}

export default Profile;
