import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ onTick, onClick, reset, message }) => {
  return (
    <div onMouseMove={onTick}>
      <h1>{ message }</h1>
      <button onClick={onClick}>Click</button>
      &nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  )
}


Hello.propTypes = {
  onClick: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  onTick: PropTypes.func.isRequired
}

export default Hello
