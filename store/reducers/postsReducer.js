import * as types from '../actions/types';

export const initialState = {
  posts: [],
  post: {},
  recommendedPosts: [],
  isLoading: false,
  isLoadingMore: false,
  error: false,
}

export const postsReducer = (state = initialState, {type, payload}) => {
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