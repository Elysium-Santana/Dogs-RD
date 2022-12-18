import React from 'react';
import { PHOTOS_GET } from '../../api';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from '../Feed/FeedPhotos.module.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { error, loading, request, data } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((foto) => (
          <FeedPhotosItem
            foto={foto}
            key={foto.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
};

export default FeedPhotos;
