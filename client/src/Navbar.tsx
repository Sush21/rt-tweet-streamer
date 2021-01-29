import React from 'react';
import { handles } from './AppConfig';
import './Header.css';

const Navbar = () => {

  return (
    <div >
      <div></div>
      <div className="ui three top attached buttons">
        {handles.map(item =>
          <button className="button-outline ui twitter button"
            key={item}
          >
            @{item.toUpperCase()}
          </button>)}
      </div>
    </div>
  )
}

export default Navbar;
