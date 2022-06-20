import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chooseMonster } from '../../redux/monsters/monsters';

const Monster = (props) => {
  const { id, name } = props;
  const dispatch = useDispatch();

  const searchMonster = () => {
    dispatch(chooseMonster(id));
  };

  return (
    <div id={id}>
      <NavLink
        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
        to="selectedMonster"
        onClick={searchMonster}
      >
        {name}
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
