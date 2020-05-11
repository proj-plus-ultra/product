import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Product from './components/Product.jsx'
import ProductPrice from './components/ProductPrice.jsx'
import Reviews from './components/Reviews.jsx'
import Bag from './components/add/Bag.jsx'
import ImageView from './components/imageViewer/ImageView.jsx'
import Details from './components/Detail/Details.jsx'
import DropDownList from './components/DropDown/DropDownList.jsx'
import NavLink from './components/NavLink/NavLink.jsx'
import WishList from './components/WishList/WishList.jsx'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      item: {},
      whichPic: 1
    }
    this.getItems = this.getItems.bind(this);
    this.random = this.random.bind(this);
    this.changePhoto = this.photoChange.bind(this);
    this.photoChange = this.photoChange.bind(this);
  }

  componentDidMount(){
    this.getItems();
    this.random();
  }

  getItems() {
    axios.get('/api')
    .then((data) => {
      this.setState({
        items: data.data,
      }, () => console.log(this.state.items))
    })
    .catch(err => console.error(err))
  }

  random() {
    setTimeout(() => {
      this.setState({
        item: (this.state.items[Math.floor(Math.random() * Math.floor(this.state.items.length))])
      }, () => console.log(this.state.item))
    },500)
  }

  photoChange(id) {
    this.setState({
      whichPic: id
    }, () => console.log(this.state.whichPic))
  }

  render() {
    return (
      <div className = 'container'>
        <div>
          <NavLink item = {this.state.item}/>
          <ImageView whichPic = {this.state.whichPic}/>
        </div>

        <div className = "sideContainer" >
          <Product item = {this.state.item}/>
          <br />
          <ProductPrice item = {this.state.item}/>
          <br />
          <Reviews item = {this.state.item}/>
          <br />
          <DropDownList item = {this.state.item} photoChange = {this.photoChange}/>
          <br />
          <div style ={{margin: "5px"}}>
            {this.state.item.marketing}
          </div>
          <br />
          <Bag />
          <br />
          <WishList />
          <br />
          <Details item = {this.state.item}/>

        </div>
      </div>
    )
  }
}

export default App;


