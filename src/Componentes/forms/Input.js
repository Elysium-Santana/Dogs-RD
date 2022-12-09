import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wepper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} type={type} name={name} id={name} />
      <p className={styles.error}>Erro</p>
    </div>
  );
};

export default Input;
