import React from 'react';

function Amount(props) {
  const newStyle = {
    width: 44,
    height: 31,
    textAlign: 'center',
  };

  return (
  <input type="text" name="Amount" placeholder = {props.cart} max-value="5" style ={newStyle}></input>
  );
}

export default Amount;
