import React from 'react';
import Plus from './Plus.jsx'
import Amount from './Quantity.jsx'
import Minus from './Minus.jsx'
import AddToBag from './AddToBag.jsx'


class Bag extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: 1
    }
    this.addHandler = this.addHandler.bind(this);
    this.minusHandler = this.minusHandler.bind(this);
  }

  addHandler() {
   this.setState(prevState => {
     return {
       cart: prevState.cart + 1
     }
   })
  }

  minusHandler() {
    this.setState(prevState => {
      return {
        cart: prevState.cart - 1
      }
    })
   }


   //addToBag function that will take into account value of the amount and add that amount and item to the bag


  render() {

    return (

      <div className = 'addToCart'>
        <Minus minusHandler = {this.minusHandler}/>
        <Amount cart = {this.state.cart}/>
        <Plus addHandler = {this.addHandler}/>
        <AddToBag/>
      </div>
    )
  }
}

export default Bag;


