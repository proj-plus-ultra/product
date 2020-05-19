import React from 'react';
import Colors from './Colors.jsx';
import axios from 'axios';


class DropDownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.getColors = this.getColors.bind(this);
  }

  componentDidMount() {
    this.getColors();
  }

  // getColors() {
  //   axios.get(`http://localhost:8080/api/colors`, {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}})
  //   .then((data) => {
  //     this.setState({
  //       colors: data.data
  //     })
  //   })
  //   .catch(err => console.error(err))
  // }

  getColors() {
    axios.get(`http://ec2-54-200-140-86.us-west-2.compute.amazonaws.com:3000/api/colors`)
    .then((data) => {
      this.setState({
        colors: data.data
      })
    })
    .catch(err => console.error(err))
  }

  render() {
    let newStyle = {
      border: '20px',
    };
    return (

      <div style={newStyle}>
        <Colors colors={this.state.colors} item={this.props.item} photoChange={this.props.photoChange} />
      </div>

    );
  }
}

export default DropDownList;
