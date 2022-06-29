import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Location = (props) => {
  const { id, name } = props;

  return (
    <div className="gridMonster" id={id}>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to={`/Location/${name}`}
      >
        <p className="monstername">
          {name}
        </p>
        <p>
          LOCATION ID:
          {' '}
          {id}
        </p>
      </NavLink>
    </div>
  );
};

export default Location;

Location.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

Location.defaultProps = {
  id: 0,
  name: 'UNKNOW',
};
