import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './UseHelper';

// A custom React Hook to fetch data from backend
const useTwitter = (handle, maxId) => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTweets([]);
  }, [handle]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const params = maxId.length ? { max_id: maxId } : {};

    axios({
      method: 'GET',
      url: `${BASE_URL}/${handle}`,
      params,
    }).then((res) => {
      setTweets((prevTweets) => [...prevTweets, ...res.data]);
      setIsLoading(false);
    }).catch(() => {
      setError(true);
      setIsLoading(false);
    });
  }, [handle, maxId]);

  return [tweets, isLoading, error];
};

export default useTwitter;
