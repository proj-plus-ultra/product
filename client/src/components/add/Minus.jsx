import React from 'react';

function Minus(props) {
  const newStyle = {
    width: 44,
    height: 37,
    border: 'none',
    textAlign: 'center',
  };
  return (
    <input type="button" value= "—" field="Quantity" min-value="0" style = {newStyle} onClick = {() => props.minusHandler()}></input>
  );
}

export default Minus;
