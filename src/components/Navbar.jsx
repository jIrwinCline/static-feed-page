import React from 'react';
import Search from './search';

function Navbar() {
  var homeStyles = {
    border: 'solid 1.5px lightgray',
    float: 'left',
    fontFamily: 'Sans-serif',
    padding: '10px',
    textDecoration: 'none',
  };
  var floatStylesRight = {
    float: 'right',
  };
  var floatStylesLeft = {
    float: 'left',
  };
  var paddingStyles = {
    paddingTop: '10px',
    paddingBottom: '45px',
  };
  return (
    <div >
      <nav style={paddingStyles}>
        <div>
          <a style={homeStyles} href="#">Home</a>
          <a style={homeStyles} href="#"> Notifications</a>
          <a style={homeStyles} href="#"> Messages </a>
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
