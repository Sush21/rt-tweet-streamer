import React, { useState, useEffect } from 'react';
import { handles, digits } from './AppConfig';
import './Navbar.css';


const Navbar = ({ changeHandle }) => {
  const [scrolled, setScrolled]= useState(false);

  const handleScroll = () => {
    window.scrollY > 200 ? setScrolled(true) : setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  const handleClick = (handler) => {
    changeHandle(handler)
  }

  return (
    <div className={scrolled && 'stickey'}>
      <div></div>
      <div className={`ui ${digits[handles.length]} top attached tiny buttons`}>
        {handles.map(handler =>
          <button className="ui black button"
            name={handler}
            key={handler}
            onClick={() => handleClick(handler)}
          >
            @{handler.toUpperCase()}
          </button>)}
      </div>
    </div>
  )
}

export default Navbar;
