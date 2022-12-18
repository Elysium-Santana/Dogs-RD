import React from 'react';
import styles from '../Feed/FeedPhotosItem.module.css';

const FeedPhotosItem = ({ foto }) => {
  return (
    <li className={styles.foto}>
      <img src={foto.src} alt={foto.title} />
      <span className={styles.visualizacao}>{foto.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
