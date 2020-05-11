import React from 'react';


function Product(props) {
  return (
    <div className = 'Product'>
      {props.item.name}
    </div>
  )
}

export default Product

