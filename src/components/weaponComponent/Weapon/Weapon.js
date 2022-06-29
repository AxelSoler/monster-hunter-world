import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Weapon = (props) => {
  const { id, name } = props;

  return (
    <div className="gridMonster" id={id}>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to={`/Weapon/${name}`}
      >
        <p className="monstername">
          {name}
        </p>
        <p>
          WEAPON ID:
          {' '}
          {id}
        </p>
      </NavLink>
    </div>
  );
};

export default Weapon;

Weapon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

Weapon.defaultProps = {
  id: 0,
  name: 'UNKNOW',
};
