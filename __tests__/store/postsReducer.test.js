import * as types from '../../store/actions/types';
import { initialState, postsReducer } from '../../store/reducers/postsReducer';

describe("Posts Reducer", () => {

  it('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(initialState).toEqual(newState);
  })

  it('Should return a new state if it receives an action type', () => {
    const newPost = {title: 'new title'};
    const newState = postsReducer(undefined, {type: types.FETCH_POST, payload: newPost})
    expect(newState.post).toEqual(newPost);
  })

})
