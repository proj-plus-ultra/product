import React from 'react';


function Product(props) {
  let productStyle = {
    fontFamily: 'Questrial',
    fontSize: '30px',
    letterSpacing: '3px',
  };
  return (
    <div style={productStyle}>
      {props.item.name}
    </div>
  );
}

export default Product;
