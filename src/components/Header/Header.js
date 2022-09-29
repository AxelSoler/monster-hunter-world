import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const { name } = props;
  return (
    <div className="headerContainer">
      <NavLink to="/" className="backBtn"><IoIosArrowBack size="2.5em" color="#fff" /></NavLink>
      <header>
        <h2>{name}</h2>
      </header>
    </div>
  );
};

export default Header;

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: 'MONSTER HUNTER WORLD',
};
