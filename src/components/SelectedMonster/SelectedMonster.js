import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import uniqid from 'uniqid';

const SelectedMonster = () => {
  const { monstername } = useParams();
  const allMonsters = useSelector((state) => state);
  const monsterArray = allMonsters.filter((element) => element.monsterName === monstername);
  const monster = monsterArray[0];

  if (monster !== undefined) {
    return (
      <div>
        <h2>{monster.monsterName}</h2>
        <p>{monster.monsterDescription}</p>
        <p>{monster.monsterSpecies}</p>
        <p>{monster.monsterType}</p>
        {monster.monsterWeaknesses.map((weakness) => (
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
