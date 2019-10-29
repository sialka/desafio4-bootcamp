import React from 'react';
import './Header.css';
import brand from '../assets/facebook-1.png';
import profile from '../assets/profile.png';

function Header(){
  return (
    <header id="main-header">      
      <a href="#"><img src={brand} alt="brand"/></a>
      <nav>        
        <a href="#">
          Meu perfil
          <img src={profile} alt="brand"/>
        </a>        
      </nav>
    </header>
  );
}

export default Header;