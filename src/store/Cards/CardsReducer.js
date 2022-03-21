import * as types from "./CardsTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CARDS_RECEIVE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};