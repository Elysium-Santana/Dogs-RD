import React from 'react';
import styles from '../Feed/FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ foto, setModalPhoto }) => {
  function handleclick() {
    setModalPhoto(foto);
  }
  return (
    <li className={styles.foto} onClick={handleclick}>
      <Image src={foto.src} alt={foto.title} />
      <span className={styles.visualizacao}>{foto.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
