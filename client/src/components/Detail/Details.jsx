import React from 'react';
import Info from './Info.jsx'

class Details extends React.Component {
  constructor() {
    super()
    this.state = {
      detailBold: false,
      inspBold: false,
      howBold: false,
      ingBold: false,
      clicked: '',
    }
    this.detailStyler = this.detailStyler.bind(this)
    this.inspStyler = this.inspStyler.bind(this)
    this.howStyler = this.howStyler.bind(this)
    this.ingStyler = this.ingStyler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }



detailStyler() {
  this.setState(prevState => {
    return {
      detailBold: !prevState.detailBold
    }
  })
}


inspStyler() {
  this.setState(prevState => {
    return {
      inspBold: !prevState.inspBold
    }
  })
}

howStyler() {
  this.setState(prevState => {
    return {
      howBold: !prevState.howBold
    }
  })
}


ingStyler() {
  this.setState(prevState => {
    return {
      ingBold: !prevState.ingBold
    }
  })
}

clickHandler(event, name) {
  this.setState({
    clicked: name
  }, () => console.log(this.state.clicked))
}



  render() {
    return (
      <div>
        <div className = 'detail'>
          <text name = 'detail' className = 'detail-details' style = {!this.state.detailBold ? {fontWeight: 'normal'} : {fontWeight: '800', color: 'black'}} onClick = {() => {this.detailStyler(); this.clickHandler(event, 'detail');}}>

          DETAILS
          </text>

            &nbsp;

          <text>
          |
          </text>

            &nbsp;

          <text name = 'inspo' className = 'detail-inspo' style = {!this.state.inspBold ? {fontWeight: 'normal'} : {fontWeight: '800', color: 'black'}} onClick = {() => {this.inspStyler(); this.clickHandler(event, 'inspo');}}>
            RIHANNA'S INSPO
          </text>

            &nbsp;

          <text>
          |
          </text>

            &nbsp;

          <text name = 'how' className = 'detail-how' style = {!this.state.howBold ? {fontWeight: 'normal'} : {fontWeight: '800', color: 'black'}} onClick = {() => {this.howStyler(); this.clickHandler(event, 'how');}}>
            HOW TO
          </text>

          &nbsp;

          <text>
          |
          </text>

          &nbsp;

          <text name = 'ingredients' className = 'detail-ingredients' style = {!this.state.inspBold ? {fontWeight: 'normal'} : {fontWeight: '800', color: 'black'}} onClick = {() => {this.ingStyler(); this.clickHandler(event, 'ingredients');}}>
            INGREDIENTS
          </text>
        </div>


        <div>
          <Info clicked = {this.state.clicked} item = {this.props.item}/>
        </div>


      </div>

    )
  }
}

export default Details;


