import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './AppConfig';


const useTwitter = (handle, max_id) => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTweets([]);
  }, [handle])


  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const params = max_id.length ? { max_id } : {}
    axios({
      method: 'GET',
      url: `${BASE_URL}/${handle}`,
      params
    }).then( res => {
        setTweets(prevTweets => [...prevTweets, ...res.data]);
        setIsLoading(false);
    }).catch(e => {
        console.log(e);
        setError(true);
        setIsLoading(false);
    })
  }, [handle, max_id]);

  return { tweets, isLoading, error }
};

export default useTwitter;
