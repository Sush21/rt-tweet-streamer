import React, { useState, useRef, useCallback } from 'react';
import Header from './Header';
import useTwitter from './useTwitter';
import './App.css';
import TweetCard from './TweetCard';
// import { banner } from './AppConfig';
import Navbar from './Navbar';
import Loader from './Loader';
import Error from './Error';
import banner from'./assets/images/banner.jpg';


const App = () => {
  const [max_id, setMax_id] = useState('');
  const [handle, setHandle] = useState('potus');
  const observer = useRef();
  const { tweets, isLoading, error } = useTwitter(handle, max_id);

  const changeHandle = selectedHandle => {
    if(selectedHandle === handle)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 300)

    else
    setHandle(selectedHandle)
  }

  const lastTweetElementRef = useCallback(node => {
    if(isLoading) return;

    let lastTweetId = tweets[tweets.length-1].id_str;
    tweets.pop();
    if(observer.current)
      observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting)
      setMax_id(lastTweetId)
    });
    if(node)
      observer.current.observe(node);
  }, [isLoading, tweets]);

  let profileBanner = banner;
  if(tweets.length && tweets[0].profile_banner_url)
    profileBanner = tweets[0].profile_banner_url;

   return(
    <>
      <Header profileBanner={profileBanner}/>
      <div className="ui container">
        <Navbar handle={handle} changeHandle={changeHandle}/>
        {tweets.map((tweet, index) => (tweets.length === index + 1)
        ? <div ref={lastTweetElementRef} key={tweet.id_str} >
            <TweetCard tweet={tweet} />
          </div>
        : <div key={tweet.id_str} >
            <TweetCard tweet={tweet}/>
          </div>
        )}
        {isLoading && <Loader />}
        {error && <Error />}
      </div>
    </>
   )
};

export default App;
