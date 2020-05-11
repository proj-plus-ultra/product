import React from 'react';

class WishList extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  render() {
    return (
      <div className = 'addToWishList'>
        ♡ ADD TO WISHLIST

        {/* <button onClick = {() => this.showModal()}>SHOW </button> */}
      </div>
    )
  }
}


export default WishList;