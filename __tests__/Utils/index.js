import { applyMiddleware, createStore } from 'redux';
import reducer from '../../store/reducers/index';
import thunkMiddleware from 'redux-thunk';

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
};