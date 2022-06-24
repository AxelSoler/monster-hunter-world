import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css';

const Links = () => (
  <div className="pageNav">
    <NavLink
      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      to="/Monster/"
    >
      <div className="pageLink">
        <p>
          Monsters
        </p>
      </div>
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      to="/Armor/"
    >
      <div className="pageLink">
        <p>
          Armor
        </p>
      </div>
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      to="/Aliments/"
    >
      <div className="pageLink">
        <p>
          Aliments
        </p>
      </div>
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      to="/Locations/"
    >
      <div className="pageLink">
        <p>
          Locations
        </p>
      </div>
    </NavLink>
  </div>
);

export default Links;
