import React from 'react';
import Search from './search';

function Navbar() {
  var homeStyles = {
    border: 'solid',
    float: 'left',
    fontFamily: 'Courier New',
  };
  var floatStylesRight = {
    float: 'right',
  };
  var floatStylesLeft = {
    float: 'left',
  };
  var paddingStyles = {
    paddingTop: '20px',
    paddingBottom: '35px',
  };
  return (
    <div >
      <nav style={paddingStyles}>
        <div style={homeStyles}>
          <a href="#">Home |</a>
          <a href="#"> Notifications |</a>
          <a href="#"> Messages </a>
        </div>

        <a><button style={floatStylesRight}>
          Tweet
        </button></a>
      <a style={floatStylesRight}><Search/></a>

      </nav>

    </div>
  );
}

export default Navbar;
