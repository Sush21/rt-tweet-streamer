import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import { banner } from './AppConfig';


const Header = () => {

  return (
    <div className={"ui container"}>
      <div></div>
      <h1 className="ui header">
        <div className="content ui blue small header">
          Real Time Tweet Streamer
          <div className="sub header">Powered by Faycel Touili</div>
        </div>
      </h1>
      <img className="ui image" src={banner} alt="banner"></img>
      <Navbar />
    </div>
  )
}

export default Header;
