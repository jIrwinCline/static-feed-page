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
  return (
        <div>
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
