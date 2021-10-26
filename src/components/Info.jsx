import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Info extends Component {
  render() {
    const { product: { thumbnail, title } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

Info.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Info;
