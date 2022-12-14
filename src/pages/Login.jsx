import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/home" className={ styles.profile }>
            <button
              type="submit"
            >
              Entrar
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default Login;
