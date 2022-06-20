import React from 'react';
import PropTypes from 'prop-types';

const Monster = (props) => {
  const { id, name } = props;

  return (
    <div id={id}>
      <h3>{name}</h3>
    </div>
  );
};

export default Monster;

Monster.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
