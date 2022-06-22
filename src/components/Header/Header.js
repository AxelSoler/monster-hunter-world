import React from 'react';
import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div>
    <header>
      <NavLink to="/" className="backBtn"><IoIosArrowBack size="2em" color="#fff" /></NavLink>
      <h1>Monsters</h1>
      <div className="config">
        <IoMdMic size="2em" color="#fff" />
        <GoGear size="2em" color="#fff" />
      </div>
    </header>
  </div>
);

export default Header;
