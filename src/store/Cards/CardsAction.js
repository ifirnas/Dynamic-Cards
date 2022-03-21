
import * as types from "./CardsTypes";

export const actionRequest = () => ({
  type: types.GET_CARDS_REQUEST
});

export const actionReceive = payload => ({
  type: types.GET_CARDS_RECEIVE,
  payload
});