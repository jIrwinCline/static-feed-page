import React from 'react';

function Bio() {
  var card = {
    border: 'solid 1.5px lightgray',
    width: '250px',
    marginTop: '20px',
  };
  return (
    <div style={card}>
      <p>"lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie "</p>
      </div>
  );
}

export default Bio;
