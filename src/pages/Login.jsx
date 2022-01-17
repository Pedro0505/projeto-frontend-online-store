import React, { Component } from 'react';
import styles from '../styles/Login.module.css';
import LoginImage from '../images/Login.svg';

class Login extends Component {
  render() {
    return (
      <main className={ styles.mainLogin }>
        <div className={ styles.imageContainer }>
          <img src={ LoginImage } alt="" />
        </div>
        <form>
          <label htmlFor="email">
            <p>Login</p>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input type="password" id="password" />
          </label>
          <button
            onClick={ (event) => event.preventDefault() }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
