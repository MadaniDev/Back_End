import React from 'react';
import { useEffect } from 'react';
import Carousel from '../components/Carousel'
import Products from '../components/Products'
import WebFont from 'webfontloader';
import Posts from '../components/Posts';

const Home = () => {

  // Mengeksekusi fungsi WebFont setiap kali render dengan useEffect
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);
 
  return (
    <div>
      {/* Memanggil dan menampilkan konten dari Component */}
        <Carousel/>
        <p className='text-center my-5' style={{fontFamily:'Caprasimo'}}>Lorem</p>
        <Products/>
        <Posts/>
    </div>
  )
}

export default Home