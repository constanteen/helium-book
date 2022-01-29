import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  recommendedPosts: [],
  isLoading: false,
  isLoadingMore: false,
  error: false,
}

const initialQueryState = {
  page: 0,
  limit: 12,
}

const postsReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case types.IS_LOADING:
      return {...state, isLoading: payload};
    case types.IS_LOADING_MORE:
      return {...state, isLoadingMore: payload};
    case types.FETCH_POSTS:
      return {...state, posts: payload};
    case types.FETCH_POST:
      return {...state, post: payload};
    case types.REMOVE_SET_POST: 
      return {...state, post: {}};
    case types.FETCH_MORE: 
      return {...state, posts: [...posts, ...payload]};
    case types.FETCH_ERROR: 
      return {...state, error: true};
    case types.FETCH_RECOMMENDED_POSTS:
      return {...state, recommendedPosts: payload};
    default:
      return state;
  }
}

const queryReducer = (state = initialQueryState, {type, payload}) => {
  switch(type) {
    case types.INCREMENT_PAGE_AND_LIMIT: 
      let limit = state.limit += 12;
      let page = state.page;
      if (limit > 50) {
        page += 1;
        limit = 12
      }
      return { page, limit };
    default: 
      return state;
  }
}

const reducers = combineReducers({
  posts: postsReducer,
  queryParams: queryReducer,
})

export default reducers;