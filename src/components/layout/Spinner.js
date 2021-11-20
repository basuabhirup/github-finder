import React from 'react';
import spinner from './spinner.gif';

function Spinner() {
const spinnerStyle =  {
  width: '200px',
  margin: 'auto',
  display: 'block'
}

  return (
    <>
      <img src={spinner} alt="Loading..." style={spinnerStyle} />
    </>
  )
}

export default Spinner
