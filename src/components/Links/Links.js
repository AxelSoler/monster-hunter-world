import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => (
  <div>
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
  </div>
);

export default Links;
