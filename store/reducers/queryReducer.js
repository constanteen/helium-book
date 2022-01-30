import * as types from '../actions/types';

export const initialQueryState = {
  page: 0,
  limit: 12,
}

export const queryReducer = (state = initialQueryState, {type, payload}) => {
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
