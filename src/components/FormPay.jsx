import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormPay extends Component {
  render() {
    const { cart } = this.props;
    return (
      <form>
        {
          cart.length > 0 && (cart.map((item) => (
            <div key={ item.id }>
              <h2
                data-testid="shopping-cart-product-name"
              >
                { item.title }
              </h2>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { item.quantity }
              </p>
              <p>
                { `R$${item.price * item.quantity}` }
              </p>
            </div>
          )))
        }
        <h2> Informações do Comprador </h2>
        <label htmlFor="inputName">
          <input
            type="text"
            name="inputName"
            id="inputName"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            onKeyPress={ this.removeEspecialChar }
          />
        </label>
        <label htmlFor="inputCpf">
          <input
            type="text"
            name="inputCpf"
            id="inputCpf"
            data-testid="checkout-cpf"
            placeholder="CPF"
          />
        </label>
        <label htmlFor="inputEmail">
          <input
            type="text"
            name="inputEmail"
            id="inputEmail"
            data-testid="checkout-email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="inputPhone">
          <input
            type="text"
            name="inputPhone"
            id="inputPhone"
            data-testid="checkout-phone"
            placeholder="Telefone"
          />
        </label>
        <label htmlFor="inputCep">
          <input
            type="text"
            name="inputCep"
            id="inputCep"
            data-testid="checkout-cep"
            placeholder="Cep"
          />
        </label>
        <label htmlFor="inputAddress">
          <input
            type="text"
            name="inputAddress"
            id="inputAddress"
            data-testid="checkout-address"
            placeholder="Cep"
          />
        </label>
      </form>
    );
  }
}

FormPay.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormPay;
