import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  listOfMissions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;