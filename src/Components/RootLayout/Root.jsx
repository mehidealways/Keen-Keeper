import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../NavBar/Footer';

const Root = () => {
  return <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>;
};

export default Root;
