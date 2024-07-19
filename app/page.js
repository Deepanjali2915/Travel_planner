import React from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Data from "./components/FetchdataAll";

import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src="https://cdn.pixabay.com/video/2020/09/02/48898-457717326_large.mp4" type="video/mp4" />
      </video>
    
    </div>
    <h1 className='holidays'>Search Your Holidays</h1>
      <Data/>
      <Footer />
    </>
  );
}
