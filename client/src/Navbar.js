import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { handles, digits } from './UseHelper';
import './Navbar.css';

// Navigator to select tweeter accounts to stream
const Navbar = ({ changeHandle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => document.addEventListener('scroll', () => {
    if (window.scrollY > 200) setScrolled(true);
    else setScrolled(false);
  }, { capture: true }));

  const handleClick = (handler) => changeHandle(handler);

  return (
    <div className={scrolled ? 'stickey' : ''}>
      <div />
      <div className={`ui ${digits[handles.length]} top attached tiny buttons`}>
        {handles.map((handler) => (
          <Button
            handler={handler}
            handleClick={handleClick}
            key={handler}
          />
        ))}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  changeHandle: PropTypes.func.isRequired,
};

export default Navbar;
