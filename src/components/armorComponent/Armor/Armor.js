import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Armor = (props) => {
  const { id, name } = props;

  return (
    <div className="gridMonster" id={id}>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to={`/Armor/${name}`}
      >
        <p className="monstername">
          {name}
        </p>
        <p>
          ARMOR ID:
          {' '}
          {id}
        </p>
      </NavLink>
    </div>
  );
};

export default Armor;

Armor.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

Armor.defaultProps = {
  id: 0,
  name: 'UNKNOW',
};
