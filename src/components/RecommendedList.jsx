import React from 'react';
import Recommended from './Recommended';

var masterRecommendedList = [
  {
    avatar: 'img',
    name: 'Lorem ipsum',
  },
  {
    avatar: 'img',
    name: 'Lorem ipsum',
  },
  {
    avatar: 'img',
    name: 'Lorem ipsum',
  },
];

function RecommendedList() {
  var card = {
    border: 'solid 1.5px lightgray',
    width: '250px',
    position: 'relative',
    left: '700px',
    bottom: '1182px',
    width: '400px',
    height: '380px',
    padding: '10px',
  };
  return (
        <div style={card}>
          {masterRecommendedList.map((recommended, index) =>
            <Recommended avatar={recommended.avatar}
              name={recommended.name}
              key={index}/>
          )}
        </div>
      );
}

export default RecommendedList;
