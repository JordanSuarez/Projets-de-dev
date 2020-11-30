import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import CardProject from '../CardProject';

import './home.scss';

const Home = ({}) => {
  console.log('home');
  return (
    <main className="home">
      <h2 className="home__subtitle"> Derniers projets publiés</h2>
  
      <div className="home__latest-project">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <Pagination className="home__pagination" count={10} size="small" />
    </main>
  );
};

Home.propTypes = {

};

export default Home;
