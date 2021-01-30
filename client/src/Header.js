import React from 'react';
import './Header.css';

const Header = ({profileBanner}) => {

  return (
    <div className={"ui container"}>
      <div></div>
      <h1 className="ui header">
        <div className="content ui blue small header">
          Real Time Tweet Streamer
          <div className="sub header">Powered by Faycel Touili</div>
        </div>
      </h1>
      <img className="ui image" src={profileBanner} alt="banner"></img>
    </div>
  )
};

export default Header;
