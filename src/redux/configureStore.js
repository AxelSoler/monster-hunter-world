import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import armorReducer from './armor/armor';
import locationReducer from './location/location';
import monsterReducer from './monsters/monsters';

const rootReducer = combineReducers({
  allMonsters: monsterReducer,
  allArmor: armorReducer,
  allLocation: locationReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
