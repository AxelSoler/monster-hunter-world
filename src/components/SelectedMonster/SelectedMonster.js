import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import uniqid from 'uniqid';
import './Selected.css';

const SelectedMonster = () => {
  const { monstername } = useParams();
  const allMonsters = useSelector((state) => state);
  const monsterArray = allMonsters.filter((element) => element.monsterName === monstername);
  const monster = monsterArray[0];

  if (monster !== undefined) {
    return (
      <div className="monsterAbout">
        <h2>{monster.monsterName}</h2>
        <div>
          <p>DESCRIPTION</p>
          <p>{monster.monsterDescription}</p>
        </div>
        <p>
          SPECIES:
          {' '}
          {monster.monsterSpecies}
        </p>
        <p>
          TYPE:
          {' '}
          {monster.monsterType}
        </p>
        <p>WEAKNESS</p>
        <div className="weakness">
          {monster.monsterWeaknesses.map((weakness) => (
            <div key={uniqid()}>
              <p>{weakness.element}</p>
              <p>{weakness.stars}</p>
            </div>
          ))}
        </div>
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
