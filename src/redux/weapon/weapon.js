const GET_WEAPON = 'monster-hunter-world/weapon/GET_WEAPON';

const listOfWeapon = [];
const urlApi = 'https://mhw-db.com/weapons';

const weaponReducer = (state = listOfWeapon, action) => {
  switch (action.type) {
    case GET_WEAPON:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const getWeapon = (weapon) => ({
  type: GET_WEAPON,
  payload: weapon,
});

export const getListOfWeapon = () => async (dispatch) => {
  const listOfWeapon = [];
  const response = await fetch(urlApi);
  const res = await response.json();
  const values = Object.values(res);
  values.forEach((element) => {
    listOfWeapon.push(
      {
        weaponId: element.id,
        weaponName: element.name,
      },
    );
  });
  dispatch(getWeapon(listOfWeapon));
};

export default weaponReducer;
