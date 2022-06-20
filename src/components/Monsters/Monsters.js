import React from 'react';
import Monster from '../Monster/Monster';

const Monsters = () => {
  const allMonsters = [
    {
      id: 1,
      gameName: 'dragon1',
    },
    {
      id: 2,
      gameName: 'dragon2',
    },
  ];
  return (
    <div>
      {allMonsters.map((game) => (
        <Monster key={game.id} id={game.id} name={game.gameName} />
      ))}
    </div>
  );
};

export default Monsters;
