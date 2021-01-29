import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BASE_URL } from './AppConfig';

const useTwitter = (since_id: string | null) => {
  const [handle, sethandle] = useState<string>('potus');
  const [tweets, setTweets] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const dumpTweets = (newHandle: string) => {
    console.log(newHandle)
    sethandle(newHandle);
    setTweets([]);
  }

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    axios({
      method: 'GET',
      url: `${BASE_URL}/${handle}`,
      params: { since_id }
    }).then( res => {
        console.log(res.data);
        setTweets(prevTweets => [...prevTweets, res.data]);
        setIsLoading(false);
    }).catch(e => {
        console.log(e);
        setError(true);
        setIsLoading(false);
    })
  }, [handle, since_id]);

  return { oldHandle: handle, dumpTweets, tweets, isLoading, error }
};

export default useTwitter;
