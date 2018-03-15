import React, { Component } from 'react';
import NavBar from './NavBar';
import GameSelect from './GameSelect';

const Home = ({src, title, onClick}) => {

    return (
      <div>
        <NavBar src={src} title={title} onClick={onClick}  />
        <GameSelect/>
      </div>
    );

}

export default Home;