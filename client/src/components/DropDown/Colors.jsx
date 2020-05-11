import React from 'react';
import Color from './Color.jsx'

class Colors extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: 0,
			single: {},
			filtered: {}
		}
	}

	componentDidUpdate(prevProps) {
		if(this.props.item.id !== this.state.id) {
			this.setState({
				id: this.props.item.id
			})
		}
	}

	render() {
		console.log(this.props.colors)
		let filtered = this.props.colors.filter((item) => item.id === this.state.id)

		return (
			<div >
				<div className = 'palette'>
					<Color item = {filtered} photoChange = {this.props.photoChange}/>
				</div>
			</div>
		)
	}
}

export default Colors;


