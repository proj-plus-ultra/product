import React from 'react';

function Plus(props) {
  const newStyle = {
    width: 44,
    height: 37,
    border: 'none',
    textAlign: 'center',
  };

  return (
    <input type="button" value="+" field="Quantity" max-value="5"  style = {newStyle} onClick = {() => props.addHandler()}></input>
  );
}

export default Plus;
