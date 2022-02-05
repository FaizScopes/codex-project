import React from 'react';
import Navbar from './Homepage/Navbar';
import Main from './Homepage/Main';
import Services from './Homepage/Services';
import Safety from './Homepage/Safety';
import Footer from './Homepage/Footer';

export default function Home() {
  return <>
  <Navbar/>
     <Main/>
     <Services/>
     <Safety/>
     <Footer/>
  </>
}
