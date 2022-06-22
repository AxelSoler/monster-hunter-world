import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Monster.css';

const Monster = (props) => {
  const { id, name } = props;

  return (
    <div className="gridMonster" id={id}>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to={`/Monster/${name}`}
      >
        <p className="monstername">
          {name}
        </p>
        <p>
          MONSTER ID:
          {' '}
          {id}
        </p>
      </NavLink>
    </div>
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
