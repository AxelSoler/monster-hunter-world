import monsterReducer from '../redux/monsters/monsters';

test('Monsters reducer gets all the data', () => {
  const GET_MONSTER = 'monster-hunter-world/monsters/GET_MONSTER';
  const listOfMonsters = [];
  const reducer = monsterReducer(listOfMonsters, {
    type: GET_MONSTER,
    payload: [
      {
        monsterId: 1, monsterName: 'Axel', monsterDescription: 'first monster',
      },
      {
        monsterId: 2, monsterName: 'Ivan', monsterDescription: 'second monster',
      },
    ],
  });

  expect(reducer).toStrictEqual([
    {
      monsterId: 1, monsterName: 'Axel', monsterDescription: 'first monster',
    },
    {
      monsterId: 2, monsterName: 'Ivan', monsterDescription: 'second monster',
    },
  ]);
});
