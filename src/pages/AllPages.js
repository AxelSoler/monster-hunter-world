import React from 'react';
import { NavLink } from 'react-router-dom';
import MonstersPage from './MonstersPage';

const AllPages = () => (
  <div className="allPages">
    <NavLink
      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      to="/Monster/"
    >
      <p>
        Monsters
      </p>
    </NavLink>
    <MonstersPage />
  </div>
);

export default AllPages;
