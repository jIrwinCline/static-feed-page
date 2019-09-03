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
  return (
        <div>
          {masterRecommendedList.map((recommended, index) =>
            <Recommended avatar={recommended.avatar}
              name={recommended.name}
              key={index}/>
          )}
        </div>
      );
}

export default RecommendedList;
