import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handler, handleClick }) => (
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
);

Button.propTypes = {
  handler: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
