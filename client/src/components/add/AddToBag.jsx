import React from 'react';
import styled from 'styled-components'


function AddToBag() {

  let newStyles = {
    backgroundColor: 'black',
    color: "white",
    width: 284,
    height: 38
  }
  return (
    <button style = {newStyles} className = "addToBag">Add To Cart</button>
  )
}

export default AddToBag;

