import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getById from '../services/getById';
import Info from '../components/Info';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    this.teste();
  }

  teste = async () => {
    const { match: { params: { id } } } = this.props;
    const DATA = await getById(id);
    this.setState({ details: DATA });
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        {
          Array.isArray(details) && details.map((e) => (
            <Info key={ e.body } product={ e.body } />
          ))
        }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ProductDetail;
