const GET_MONSTER = 'monster-hunter-world/monsters/GET_MONSTER';

const listOfMonsters = [];
const urlApi = 'https://mhw-db.com/monsters';

const monsterReducer = (state = listOfMonsters, action) => {
  switch (action.type) {
    case GET_MONSTER:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const getMonster = (monster) => ({
  type: GET_MONSTER,
  payload: monster,
});

export const getListOfMonsters = () => async (dispatch) => {
  const listOfMonsters = [];
  const response = await fetch(urlApi);
  const res = await response.json();
  const values = Object.values(res);
  values.forEach((element) => {
    listOfMonsters.push(
      {
        monsterId: element.id,
        monsterName: element.name,
        monsterDescription: element.description,
        monsterSpecies: element.species,
        monsterType: element.type,
        monsterWeaknesses: element.weaknesses,
      },
    );
  });
  dispatch(getMonster(listOfMonsters));
};

export default monsterReducer;
