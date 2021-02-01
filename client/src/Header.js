import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

// Header of the App
const Header = ({ profileBanner }) => (
  <div className="ui container">
    <div />
    <h1 className="ui header">
      <div className="ui content blue small header">
        Real Time Tweet Streamer
        <div className="sub header">
          <div className="meta">
            <a
              href="https://www.linkedin.com/in/faycel-touili/"
              target="_blank"
              rel="noreferrer"
            >
              Powered by Faycel Touili /
              Linkedin
              <i className="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </h1>
    <img className="ui image" src={profileBanner} alt="banner" />
  </div>
);

Header.propTypes = {
  profileBanner: PropTypes.string.isRequired,
};

export default Header;
