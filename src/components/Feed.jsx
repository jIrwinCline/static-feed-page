import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {
  return (
    <div>
      <img src={props.avatar}></img>
      <h3>{props.name}</h3>
      <p>{props.tweet}</p>
    </div>
  );
}

Feed.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  tweet: PropTypes.string,
};
export default Feed;
