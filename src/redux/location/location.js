const GET_LOCATION = 'monster-hunter-world/location/GET_LOCATION';

const listOfLocation = [];
const urlApi = 'https://mhw-db.com/locations';

const locationReducer = (state = listOfLocation, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const getLocation = (location) => ({
  type: GET_LOCATION,
  payload: location,
});

export const getListOfLocation = () => async (dispatch) => {
  const listOfLocation = [];
  const response = await fetch(urlApi);
  const res = await response.json();
  const values = Object.values(res);
  values.forEach((element) => {
    listOfLocation.push(
      {
        locationId: element.id,
        locationName: element.name,
        locationZones: element.zoneCount,
      },
    );
  });
  dispatch(getLocation(listOfLocation));
};

export default locationReducer;
