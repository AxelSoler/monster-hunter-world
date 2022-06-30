import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import './Selected.css';
import { AiFillStar } from 'react-icons/ai';
import Header from '../../Header/Header';

const SelectedMonster = () => {
  const { monstername } = useParams();
  const allMonsters = useSelector((state) => state.allMonsters);
  const monsterArray = allMonsters.filter((element) => element.monsterName === monstername);
  const monster = monsterArray[0];

  if (monster !== undefined) {
    return (
      <div>
        <Header name={monster.monsterName} />
        <div className="monsterAbout">
          <img className="monsterImg" src={`/img/monsters/${monster.monsterName}.jpg`} alt={`${monster.monsterName}`} />
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
          <h3>WEAKNESS</h3>
          <div className="weaknesses">
            {monster.monsterWeaknesses.map((weakness) => (
              <div className="weakness" key={uniqid()}>
                <p>{weakness.element.toUpperCase()}</p>
                <ul className="stars">
                  {(() => {
                    const rows = [];
                    for (let i = 0; i < weakness.stars; i += 1) {
                      rows.push(<AiFillStar size="1.5em" color="yellow" key={i} />);
                    }
                    return rows;
                  })()}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="returnBtn" type="button">
        <NavLink to="/">RETURN TO MAIN PAGE</NavLink>
      </button>
    </div>
  );
};

export default SelectedMonster;
