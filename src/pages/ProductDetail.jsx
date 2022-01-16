import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getById from '../services/getById';
import Info from '../components/Info';
import EvaluationForm from '../components/EvaluationForm';
import ShowEvaluation from '../components/ShowEvaluation';
import CartLength from '../components/CartLength';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      evaluations: [],
    };
  }

  componentDidMount() {
    this.recoveryIdContent();
    this.loadEvaluations();
  }

  componentWillUnmount() {
    const { evaluations } = this.state;
    if (evaluations.length > 0) {
      this.storeEvaluations();
    }
  }

  recoveryIdContent = async () => {
    const { match: { params: { id } } } = this.props;
    const DATA = await getById(id);
    this.setState({ details: DATA });
  }

  loadEvaluations = () => {
    const { match: { params: { id } } } = this.props;

    const evaluationsString = sessionStorage.getItem(id);
    const evaluations = JSON.parse(evaluationsString);
    if (evaluations !== null) {
      this.setState({
        evaluations,
      });
    }
  }

  storeEvaluations = () => {
    const { match: { params: { id } } } = this.props;
    const { evaluations } = this.state;
    sessionStorage.setItem(id, JSON.stringify(evaluations));
  }

  updateEvaluations = (evaluation) => {
    this.setState(({ evaluations }) => (
      { evaluations: [...evaluations, evaluation] }
    ));
  }

  render() {
    const { details, evaluations } = this.state;
    const { match: { params: { id } }, addToCart, totalQuantity } = this.props;
    return (
      <div>
        <CartLength totalQuantity={ totalQuantity } />
        {
          Array.isArray(details) && details.map((e) => (
            <Info key={ e.body } product={ e.body } />
          ))
        }
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(details[0].body) }
        >
          Adicionar ao Carrinho

        </button>
        <EvaluationForm id={ id } updateEvaluations={ this.updateEvaluations } />
        { evaluations.map((evaluation, index) => (
          <ShowEvaluation
            key={ index }
            evaluation={ evaluation }
          />
        )) }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  addToCart: PropTypes.func.isRequired,
  totalQuantity: PropTypes.number.isRequired,
};

export default ProductDetail;
