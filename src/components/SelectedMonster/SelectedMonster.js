import React from 'react';
import { useSelector } from 'react-redux';

const SelectedMonster = () => {
  const allMonsters = useSelector((state) => state);
  const viewMonster = allMonsters[0][0];

  return (
    <div>
      <h2>{viewMonster.monsterName}</h2>
      <p>{viewMonster.monsterDescription}</p>
    </div>
  );
};

export default SelectedMonster;
