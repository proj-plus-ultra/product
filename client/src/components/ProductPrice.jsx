import React from 'react';

function ProductPrice(props) {
  let newStyle = {
    height: 20,
    width: 100
  }
  return(
    <div>
        ${props.item.price}
        <br />
        or 4 interest- free installments of ${props.item.price/4} by
        <br />

        <div>
          <img style = {newStyle} src = "https://www.fentybeauty.com/on/demandware.static/Sites-FENTY-Site/-/default/dwdfbce955/images/afterpay-logo.png"></img>
        </div>


      </div>
  )
}


export default ProductPrice