const GET_MONSTER = 'monster-hunter-world/monsters/GET_MONSTER';
const CHOOSE_MONSTER = 'monster-hunter-world/monsters/CHOOSE_MONSTER';

const listOfMonsters = [];
const urlApi = 'https://mhw-db.com/monsters';

const monsterReducer = (state = listOfMonsters, action) => {
  switch (action.type) {
    case GET_MONSTER:
      return [...state, ...action.payload];
    case CHOOSE_MONSTER:
      return [state.filter((monster) => monster.monsterId === action.id)];
    default:
      return state;
  }
};

export const getMonster = (monster) => ({
  type: GET_MONSTER,
  payload: monster,
});

export const chooseMonster = (monsterId) => ({
  type: CHOOSE_MONSTER,
  id: monsterId,
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
      },
    );
  });
  dispatch(getMonster(listOfMonsters));
};

export default monsterReducer;
