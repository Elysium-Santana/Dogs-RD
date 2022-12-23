import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css';

const PhotoContent = ({ data }) => {
  const { comments, photo } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.autor}>
            <Link to={`/perfil${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>
              {photo.idade} {photo.idade === 1 ? ' Ano ' : ' Anos '}
            </li>
            <li>{photo.peso} Kg</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
