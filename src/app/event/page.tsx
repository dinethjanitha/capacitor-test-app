'use client';
import React from 'react';
import Video from './Video';
import Standing from './Standing';
import Tournament from './Tournament';
import Champion from './Champion';
import Gallery from './Gallery';
import Footer from './Footer';
import Header from './Header';
import NavBarMain from '../Components/NavBarMain';

const Event = () => {
  return (
    <div className="event-container">
        <NavBarMain/>
        <Header />
        <Video />
        <Standing />
        <Tournament />
        <Champion />
        <Gallery />
        <Footer />
    </div>
  );
};

export default Event;