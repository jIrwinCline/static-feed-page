import React from 'react';
import PropTypes from 'prop-types';

function Recommended(props) {
  return (
    <div>
      <img src={props.avatar}></img>
      <h3>{props.name}</h3>
      <button>Button</button>
    </div>
  );
}

Recommended.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default Recommended;
