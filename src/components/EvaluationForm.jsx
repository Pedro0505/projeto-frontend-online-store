import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      evaluationText: '',
      rating: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveEvaluation = () => {
    const { updateEvaluations } = this.props;
    const { name, evaluationText, rating } = this.state;
    const newEvaluation = { name, rating, evaluationText };
    updateEvaluations(newEvaluation);
  }

  render() {
    const { email, evaluation } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={ this.handleChange }
          value={ email }
        />
        <label htmlFor="1">
          1
          <input
            type="radio"
            value="1"
            name="rating"
            id="1"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="2">
          2
          <input
            type="radio"
            value="2"
            name="rating"
            id="2"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="3">
          3
          <input
            type="radio"
            value="3"
            name="rating"
            id="3"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="4">
          4
          <input
            type="radio"
            value="4"
            name="rating"
            id="4"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="5">
          5
          <input
            type="radio"
            value="5"
            name="rating"
            id="5"
            onChange={ this.handleChange }
          />
        </label>
        <textarea
          name="evaluationText"
          cols="30"
          rows="10"
          data-testid="product-detail-evaluation"
          onChange={ this.handleChange }
          value={ evaluation }
        />
        <button type="button" name="e" onClick={ this.saveEvaluation }>Avaliar</button>
      </form>
    );
  }
}

EvaluationForm.propTypes = {
  updateEvaluations: PropTypes.func.isRequired,
};

export default EvaluationForm;
