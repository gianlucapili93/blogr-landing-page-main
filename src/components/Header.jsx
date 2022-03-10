import React from 'react';
import Navbar from './Navbar';
import HeaderSection from './HeaderSection';
import './Header.scss';

function Header() {
  return (
    <div className="header">
        <Navbar />
        <HeaderSection />
    </div>
  )
}

export default Header