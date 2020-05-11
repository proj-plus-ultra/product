import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';

class ImageView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      photo: {},
      photo2: {},
      photo3: {},
      hover: false
    }
    this.getPhotos = this.getPhotos.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
    this.random();
  }

  getPhotos() {
    axios.get('/api/photos')
    .then((data) => {
      this.setState({
        photos: data.data
      }, () => console.log(this.state.photos))
    })
    .catch(err => console.error(err))
  }

  random() {
    setTimeout(() => {
      this.setState({
        photo: (this.state.photos[Math.floor(Math.random() * Math.floor(this.state.photos.length))]),
        photo2: (this.state.photos[Math.floor(Math.random() * Math.floor(this.state.photos.length))]),
        photo3: (this.state.photos[Math.floor(Math.random() * Math.floor(this.state.photos.length))])
      }, () => console.log(this.state.photo))
    },500)
  }

  render() {

    let newStyle = {
      cursor: 'crosshair'
    }

    return (
      <div className = "photoContainer"  >

        <img style = {newStyle} src = {this.state.photo.background}></img>

        <div className = "foreground">
          <Carousel  photo1 = {this.state.photo} photo2 = {this.state.photo2} photo3 = {this.state.photo3} whichPic = {this.props.whichPic}/>
        </div>

      </div>
    )
  }
}

export default ImageView;

