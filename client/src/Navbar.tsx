import React from 'react';
import { handles } from './AppConfig';
import './Header.css';
import useTwitter from './useTwitter';

const Navbar = () => {

  const { dumpTweets, oldHandle } = useTwitter("0");

  const handleClick = (handle: string) => {
    if(handle !== oldHandle)
      dumpTweets(handle);
  }

  return (
    <div >
      <div></div>
      <div className="ui three top attached buttons">
        {handles.map(handle =>
          <button className="button-outline ui twitter button"
            name={handle}
            key={handle}
            onClick={() => handleClick(handle)}
          >
            @{handle.toUpperCase()}
          </button>)}
      </div>
    </div>
  )
}

export default Navbar;
