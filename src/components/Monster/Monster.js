import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Monster = (props) => {
  const { id, name } = props;

  return (
    <div id={id}>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to={`/Monster/${name}`}
      >
        {name}
      </NavLink>
      <p>
        MONSTER ID:
        {' '}
        {id}
      </p>
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
