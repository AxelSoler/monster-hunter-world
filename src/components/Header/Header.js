import React from 'react';
import { IoIosArrowBack, IoMdMic } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div>
    <header>
      <NavLink to="/" className="backBtn"><IoIosArrowBack size="2.5em" color="#fff" /></NavLink>
      <h3>Monster Hunter World</h3>
      <div className="config">
        <IoMdMic size="1.5em" color="#fff" />
        <GoGear size="1.5em" color="#fff" />
      </div>
    </header>
  </div>
);

export default Header;
