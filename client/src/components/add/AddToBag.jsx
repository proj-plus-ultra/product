import React from 'react';

function AddToBag() {
  let newStyles = {
    backgroundColor: 'black',
    fontFamily: 'Questrial',
    fontSize: '.9167rem',
    letterSpacing: '3px',
    color: 'white',
    width: 284,
    height: 38,
  };
  return (
    <button type="submit" style={newStyles}>Add To Cart </button>
  );
}

export default AddToBag;
