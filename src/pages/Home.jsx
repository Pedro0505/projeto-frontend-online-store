import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <input data-testid="query-input" type="text" />
        <button
          type="submit"
          data-testid="query-button"
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
