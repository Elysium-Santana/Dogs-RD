import React from 'react';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { Routes, Route } from 'react-router-dom';
import UserContext from '../../UserContext';
import Notfound from '../Notfound';
import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="conteiner">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </section>
  );
};

export default User;
