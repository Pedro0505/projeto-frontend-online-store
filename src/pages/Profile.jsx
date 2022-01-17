import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Header from '../components/Header';
import styles from '../styles/Profile.module.css';

class Profile extends Component {
  render() {
    return (
      <main className={ styles.mainProfile }>
        <Header />
        <section className={ styles.containerProfile }>
          <AccountCircle style={ { fontSize: '14em', marginBottom: '20px' } } />
          <button type="button">Meus Pedidios</button>
          <button type="button">Sair</button>
        </section>
      </main>
    );
  }
}

export default Profile;
