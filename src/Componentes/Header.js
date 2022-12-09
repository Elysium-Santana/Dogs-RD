import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} conteiner`}>
        <Link to="/" className={styles.logo} aria-label="Dogs-Home">
          <Dogs />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
