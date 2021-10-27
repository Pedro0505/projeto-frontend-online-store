import React, { Component } from 'react';
import './Form.css';

class FormPay extends Component {
  removeEspecialChar = (e) => {
    const exp = /[0-9a-zA-Z ]/gi;
    if (!exp.test(e.key)) {
      e.target.className = 'input';
    }
  }

  render() {
    return (
      <form>
        <h2> Informações do Comprador </h2>
        <label htmlFor="inputName">
          <input
            type="text"
            name="inputName"
            id="inputName"
            placeholder="Nome Completo"
            onKeyPress={ this.removeEspecialChar }
          />
        </label>
        <label htmlFor="inputCpf">
          <input
            type="text"
            name="inputCpf"
            id="inputCpf"
            placeholder="CPF"
          />
        </label>
        <label htmlFor="inputEmail">
          <input
            type="text"
            name="inputEmail"
            id="inputEmail"
            placeholder="Email"
          />
        </label>
        <label htmlFor="inputPhone">
          <input
            type="text"
            name="inputPhone"
            id="inputPhone"
            placeholder="Telefone"
          />
        </label>
      </form>
    );
  }
}

export default FormPay;
