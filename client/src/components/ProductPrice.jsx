import React from 'react';

function ProductPrice(props) {
  let newStyle = {
    height: 20,
    width: 100,
    fontWeight: 900,
  };
  let boldStyle = {
    fontWeight: 'bold',
  }
  return(
    <div>
      <p>
      ${props.item.price}
      </p>

        <br />
        <p style = {boldStyle}>
        or 4 interest- free installments of ${props.item.price/4} by
        </p>

        <div>
          <img style = {newStyle} src = "https://www.fentybeauty.com/on/demandware.static/Sites-FENTY-Site/-/default/dwdfbce955/images/afterpay-logo.png"></img>
        </div>


      </div>
  );
}


export default ProductPrice;
