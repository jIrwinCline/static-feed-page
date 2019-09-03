import React from 'react';
import Feed from './Feed';

var masterFeedList = [
  {
    avatar: 'img',
    name: 'test',
    tweet: 'Random tweet',
  },
  {
    avatar: 'img',
    name: 'test',
    tweet: 'Random tweet',
  },
  {
    avatar: 'img',
    name: 'test',
    tweet: 'Random tweet',
  },
];

function FeedList() {
  var card = {
    border: 'solid 1.5px lightgray',
    width: '250px',
    position: 'relative',
    left: '255px',
    bottom: '360px',
    width: '400px',
    height: '800px',
    padding: '10px',
  };
  return (
        <div style={card}>
          {masterFeedList.map((feed, index) =>
            <Feed avatar={feed.avatar}
              name={feed.name}
              tweet={feed.tweet}
              key={index}/>
          )}
        </div>
      );
}

export default FeedList;
