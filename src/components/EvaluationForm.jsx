import React, {Component} from 'react';
import Rating from './Rating';

class EvaluationForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      evaluationText: '',
      rating: 0,
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name)
    this.setState({
      [name]: value
    });
  }  

  hanldeRating = (stars) => {
    this.setState({
      rating: stars
    });
  }

  render() { 
    const { email, evaluation } = this.state;
    return (
      <form>
        <input 
          type="email" 
          name="email" 
          placeholder="email"
          onChange={this.handleChange}
          value={ email }
        />
        <Rating handleRating={ this.hanldeRating }/>
        <textarea 
          name="evaluationText" 
          cols="30" 
          rows="10" 
          data-testid="product-detail-evaluation"
          onChange={ this.handleChange }
          value={evaluation} 
        ></textarea>
        <button type="button" name="e">Avaliar</button>
      </form>
    );
  }
}
 
export default EvaluationForm;