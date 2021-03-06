import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css';

const Links = () => (
  <div>
    <div>
      <header>
        <h2>Monster Hunter World</h2>
      </header>
    </div>
    <div className="pageNav">
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to="/Monster/"
        id="monstersLink"
      >
        <div className="pageLink">
          <p>
            MONSTERS
          </p>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to="/Armor/"
        id="armorLink"
      >
        <div className="pageLink">
          <p>
            ARMOR
          </p>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to="/Location/"
        id="locationsLink"
      >
        <div className="pageLink">
          <p>
            LOCATIONS
          </p>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to="/Weapon/"
        id="weaponsLink"
      >
        <div className="pageLink">
          <p>
            WEAPONS
          </p>
        </div>
      </NavLink>
    </div>
  </div>
);

export default Links;
