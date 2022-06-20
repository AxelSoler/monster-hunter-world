import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import monsterReducer from './monsters/monsters';

const store = createStore(monsterReducer, applyMiddleware(logger, thunk));

export default store;
