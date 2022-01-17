import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Search from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from '../styles/Header.module.css';

class Header extends Component {
  render() {
    const { handleSearch, handleChange } = this.props;
    return (
      <header className={ styles.header }>
        <Link to="/profile" className={ styles.profile }>
          <AccountCircle />
        </Link>
        <div>
          <input
            data-testid="query-input"
            type="text"
            onChange={ handleChange }
            placeholder="Digite algum termo de pesquisa"
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ handleSearch }
          >
            <Search />
          </button>
        </div>
        <Link
          className={ styles.cart }
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <ShoppingCartIcon />
        </Link>
      </header>
    );
  }
}

Header.defaultProps = {
  handleChange: () => {},
  handleSearch: () => {},
};

Header.propTypes = {
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default Header;
