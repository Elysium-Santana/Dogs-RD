import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wepper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
