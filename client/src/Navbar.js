import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { handles, digits } from './UseHelper';
import './Navbar.css';

// Navigator to select tweeter accounts to stream

const Navbar = ({ changeHandle }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => window.addEventListener('scroll', handleScroll));

  const handleClick = (handler) => changeHandle(handler);

  return (
    <div className={scrolled ? 'stickey' : ''}>
      <div />
      <div className={`ui ${digits[handles.length]} top attached tiny buttons`}>
        {handles.map((handler) => (
          <button
            type="button"
            className="ui black button"
            name={handler}
            key={handler}
            onClick={() => handleClick(handler)}
          >
            @
            { handler.toUpperCase() }
          </button>
        ))}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  changeHandle: PropTypes.func.isRequired,
};

export default Navbar;
