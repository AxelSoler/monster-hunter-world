import React from 'react';
import { useSelector } from 'react-redux';
import { getListOfMonsters } from '../../redux/monsters/monsters';
import store from '../../redux/configureStore';
import Monster from '../Monster/Monster';

const Monsters = () => {
  const allMonsters = useSelector((state) => state.listOfMonsters);
  if (allMonsters.length === 0) {
    store.dispatch(getListOfMonsters());
  }
  console.log(allMonsters);

  return (
    <div>
      {allMonsters.map((monster) => (
        <Monster key={monster.monsterId} id={monster.monsterId} name={monster.monsterName} />
      ))}
    </div>
  );
};

export default Monsters;
