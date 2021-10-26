import React, { Component } from 'react';

class Rating extends Component {
  
  // getRating = ({ target }) => {
  //   const { handleRating }= this.props;
  //   const rate  = parseInt(target.id) + 1;
  //   console.log(target.tagName);
  //   console.log(target.id)
  //   handleRating(rate);
  // }
  
  // handleRatingHover = ( { target }) => {
  //   {}
  // }

  // createStar = (id) => {
  //   return (
  //     <span key={id}> 
        
  //       <AiTwotoneStar id={ id } color="white" onClick={ this.getRating } onMouseOver={ this.handleRatingHover }/>
  //     </span>
  //   );
  // }

  render() { 
    return (
      <div></div>
      //  new Array(5).fill(0).map((_arr, index) => this.createStar(index))
    );
  }
}
 
export default Rating;