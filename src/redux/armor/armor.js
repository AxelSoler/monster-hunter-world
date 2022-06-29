const GET_ARMOR = 'monster-hunter-world/armor/GET_ARMOR';

const listOfArmor = [];
const urlApi = 'https://mhw-db.com/armor/sets';

const armorReducer = (state = listOfArmor, action) => {
  switch (action.type) {
    case GET_ARMOR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const getArmor = (armor) => ({
  type: GET_ARMOR,
  payload: armor,
});

export const getListOfArmor = () => async (dispatch) => {
  const listOfArmor = [];
  const response = await fetch(urlApi);
  const res = await response.json();
  const values = Object.values(res);
  values.forEach((element) => {
    listOfArmor.push(
      {
        armorId: element.id,
        armorName: element.name,
        armorPieces: element.pieces,
      },
    );
  });
  dispatch(getArmor(listOfArmor));
};

export default armorReducer;
