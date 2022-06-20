import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import monsterReducer from './monsters/monsters';

const rootReducer = combineReducers({
  listOfMonsters: monsterReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
