import { combineReducers, createStore } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { counterReducer } from '../reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);
export default store;
