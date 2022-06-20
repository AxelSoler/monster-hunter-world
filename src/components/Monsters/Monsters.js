import React from 'react';
import Monster from '../Monster/Monster';

const Monsters = () => {
  const allMonsters = useSelector((state) => state.listOfMonsters);;
  return (
    <div>
      {allMonsters.map((game) => (
        <Monster key={game.id} id={game.id} name={game.gameName} />
      ))}
    </div>
  );
};

export default Monsters;
