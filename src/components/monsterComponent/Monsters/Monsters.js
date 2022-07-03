import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getListOfMonsters } from '../../../redux/monsters/monsters';
import store from '../../../redux/configureStore';
import Monster from '../Monster/Monster';
import Header from '../../Header/Header';
import './Monsters.css';

const Monsters = () => {
  const [Filter, setFilter] = useState('');
  const allMonsters = useSelector((state) => state.allMonsters);
  if (allMonsters.length === 0) {
    store.dispatch(getListOfMonsters());
  }
  const onChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };

  return (
    <div>
      <Header name="MONSTERS" />
      <div className="team-list-header">
        <p>SEARCH</p>
        <input className="monsterInput" onChange={onChange} type="text" placeholder="Monster..." />
      </div>
      <div className="grid">
        {allMonsters.filter((item) => {
          if (Filter === '') {
            return item;
          } if (item.monsterName.toLowerCase().includes(Filter.toLowerCase())) {
            return item;
          }
          return false;
        }).map((monster) => (
          <Monster key={monster.monsterId} id={monster.monsterId} name={monster.monsterName} />
        ))}
      </div>
    </div>
  );
};

export default Monsters;
