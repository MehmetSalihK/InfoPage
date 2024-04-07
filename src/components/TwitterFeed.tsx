// components/TwitterFeed.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TwitterFeed: React.FC = () => {
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('https://api.twitter.com/2/users/1040529997/tweets', {
          headers: {
            Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAADnStAEAAAAA4HyPol%2FnfnJf0S6K7Y1AHJRzqtM%3D7avXh3SHyDpbV9Q7sJl7JAKI24b5m4G6EeDC68dtg4lvW0EueJ',
          },
        });
        setTweets(response.data.data);
      } catch (error) {
        console.error('Error fetching Twitter tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div className="twitter-feed">
      {tweets.map(tweet => (
        <div key={tweet.id} className="twitter-post">
          <p>{tweet.text}</p>
          <a href={`https://twitter.com/${tweet.author.username}/status/${tweet.id}`} target="_blank" rel="noopener noreferrer">View on Twitter</a>
        </div>
      ))}
    </div>
  );
};

export default TwitterFeed;
