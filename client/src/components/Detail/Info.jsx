import React from 'react';
import Detail from './detail.jsx'
import Inspiration from './Inspiration.jsx'
import How from './How.jsx'
import Ingredients from './Ingredients.jsx'

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.renderView = this.renderView.bind(this)
  }

  renderView() {
    if(this.props.clicked === 'inspo') {
      return <Inspiration item = {this.props.item}/>
    } else if (this.props.clicked === 'how') {
      return <How />
    } else if (this.props.clicked === 'ingredients') {
      return <Ingredients />
    } else {
      return <Detail />
    }
  }

  render() {
    return(
      <div className = 'info'>
        <br />

        <div>
          {this.renderView()}
        </div>

      </div>
    )
  }
}



export default Info;

