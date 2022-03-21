import { call, put } from "redux-saga/effects";
import API from "./CardsApi";
import * as ACTIONS from "./CardsAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./CardsTypes";

export function* sagasRequestCards() {
  try {
    const response = yield call(API.apiCardListRequest);
    yield put(ACTIONS.actionReceive(response.data));
  } catch (err) {
    alert(err);
  }
}

export function* CardsSaga() {
  yield takeLatest(TYPES.GET_CARDS_REQUEST, sagasRequestCards);
}