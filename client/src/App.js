import React, { useState, useRef, useCallback } from 'react';
import Header from './Header';
import useTwitter from './useTwitter';
import './App.css';
import TweetCard from './TweetCard';
import Navbar from './Navbar';
import Loader from './Loader';
import Error from './Error';
import banner from './assets/images/banner.jpg';

const App = () => {
  const [maxId, setMaxId] = useState('');
  const [handle, setHandle] = useState('twitter');
  const observer = useRef();
  const [tweets, isLoading, error] = useTwitter(handle, maxId);

  // switching between making a call to api to fetch the new account
  // or scroll to top if we select the current account
  const changeHandle = (selectedHandle) => {
    if (selectedHandle === handle) {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 300);
    } else setHandle(selectedHandle);
  };

  // handle fetching from Api when we reach the last tweet
  const lastTweetElementRef = useCallback((node) => {
    if (isLoading) return;

    const lastTweetId = tweets[tweets.length - 1].id_str;
    tweets.pop();
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setMaxId(lastTweetId);
    });

    if (node) observer.current.observe(node);
  }, [isLoading, tweets]);

  let profileBanner = banner;

  if (tweets.length && tweets[0].profile_banner_url) {
    profileBanner = tweets[0].profile_banner_url;
  }

  return (
    <>
      <Header profileBanner={profileBanner} />
      <div className="ui container">
        <Navbar changeHandle={changeHandle} />
        {tweets.map((tweet, index) => ((tweets.length === index + 1)
          ? (
            <div ref={lastTweetElementRef} key={tweet.id_str}>
              <TweetCard tweet={tweet} changeHandle={changeHandle} />
            </div>
          )
          : (
            <div key={tweet.id_str}>
              <TweetCard tweet={tweet} />
            </div>
          )))}
        {isLoading && <Loader />}
        {error && <Error />}
      </div>
    </>
  );
};

export default App;
