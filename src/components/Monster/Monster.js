import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Monster.css';

const Monster = (props) => {
  const { id, name } = props;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
      to={`/Monster/${name}`}
    >
      <div className="gridMonster" id={id}>
        <p className="monstername">
          {name}
        </p>
        <p>
          MONSTER ID:
          {' '}
          {id}
        </p>
      </div>
    </NavLink>
  );
};

export default Monster;

Monster.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

Monster.defaultProps = {
  id: 0,
  name: 'MONSTER',
};
