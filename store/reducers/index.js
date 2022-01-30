import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { queryReducer } from './queryReducer';

const reducers = combineReducers({
  posts: postsReducer,
  queryParams: queryReducer,
})

export default reducers;