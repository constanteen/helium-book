import * as types from '../actions/types';
import {dummyApi} from '../../apis/dummyApi';

export const fetchPosts = () => async(dispatch, getState) => {
  dispatch({type: types.IS_LOADING, payload: true});
  const { queryParams: {page, limit} } = getState() || {};
  try {
    const response = await dummyApi.get(`/post?page=${page}&limit=${limit}`);
    dispatch({
      type: types.FETCH_POSTS,
      payload: response.data.data,
    })
  } catch(e) {
    dispatch({type: types.FETCH_ERROR});
    console.error(e);
  } finally {
    dispatch({type: types.IS_LOADING, payload: false});
  }
}

export const fetchPost = (id) => async(dispatch) => {
  dispatch({type: types.IS_LOADING, payload: true});
  Promise.all([
    dummyApi.get(`/post/${id}`),
    dummyApi.get(`/post/?page=${Math.floor(Math.random() * 100)}&limit=5`)
  ])
  .then((responses) => responses.map((response) => response))
  .then((response) => {
    dispatch({
      type: types.FETCH_POST,
      payload: response?.[0].data,
    })
    dispatch({
      type: types.FETCH_RECOMMENDED_POSTS,
      payload: response?.[1].data.data,
    })
  }).catch((e) => {
    dispatch({type: types.FETCH_ERROR});
    console.error(e)
  }).finally(() => dispatch({type: types.IS_LOADING, payload: false}));
}

export const fetchMore = () => async(dispatch, getState) => {
  dispatch({type: types.INCREMENT_PAGE_AND_LIMIT});
  const { queryParams: {page, limit} } = getState() || {};
  dispatch({type: types.IS_LOADING_MORE, payload: true});
  try {
    const response = await dummyApi.get(`/post?page=${page}1&limit=${limit}`);
    dispatch({
      type: types.FETCH_POSTS,
      payload: response.data.data,
    })
  } catch(e) {
    dispatch({type: types.FETCH_ERROR});
    console.error(e);
  } finally {
    dispatch({type: types.IS_LOADING_MORE, payload: false});
  }
}

export const removeSetPost = () => {
  return {
    type: types.REMOVE_SET_POST,
  }
}

export const incrementPageAndLimit = () => {
  return {
    type: types.INCREMENT_PAGE_AND_LIMIT,
  }
}

export const fetchError = () => {
  return {
    type: types.FETCH_ERROR,
  }
}