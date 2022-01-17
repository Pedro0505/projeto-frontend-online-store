import React, { Component } from 'react';
import styles from '../styles/Home.module.css';

class FreeShipping extends Component {
  render() {
    return (
      <p className={ styles.freeShipping } data-testid="free-shipping"> Frete Grátis </p>
    );
  }
}

export default FreeShipping;
