import React from 'react';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

const SelectedMonster = () => {
  const allMonsters = useSelector((state) => state);

  if (allMonsters.length !== 0) {
    const viewMonster = allMonsters[allMonsters.length - 1][0];
    return (
      <div>
        <h2>{viewMonster.monsterName}</h2>
        <p>{viewMonster.monsterDescription}</p>
        <p>{viewMonster.monsterSpecies}</p>
        <p>{viewMonster.monsterType}</p>
        {viewMonster.monsterWeaknesses.map((weakness) => (
          <div key={uniqid()}>
            <p>{weakness.element}</p>
            <p>{weakness.stars}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p>return to main page</p>
    </div>
  );
};

export default SelectedMonster;
