import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <NavLink to="/"><IoIosArrowBack size="2em" color="#0290ff" /></NavLink>
      <h1>Monsters</h1>
    </header>
  </div>
);

export default Header;
