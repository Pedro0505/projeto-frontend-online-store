import React from 'react';
import PropTypes from 'prop-types';

class ShowEvaluation extends React.Component {
  render() {
    const { evaluation: { name, rating, evaluationText } } = this.props;
    return (
      <div>
        <span>{ name }</span>
        <span>
          { rating }
        </span>
        <p>{ evaluationText }</p>
      </div>
    );
  }
}

ShowEvaluation.propTypes = {
  evaluation: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ShowEvaluation;
