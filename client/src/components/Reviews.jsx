import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ratings: ''
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    // console.log(this.props)
    return (
      <div className = 'reviewsComponent'>

        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.props.item.rating}
          starColor={'black'}
          emptyStarColor={'rgb(250, 247, 247)'}
          starBackground = {'blue'}
          onStarClick={this.onStarClick.bind(this)}
    />
    {this.props.item.rating} ({this.props.item.reviews}) Write a Review
      </div>
    )
  }
}

export default Reviews