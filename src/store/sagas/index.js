// import { FeatureSaga1 } from '../Feature1/FeatureSagas';
import { all } from "redux-saga/effects";
import { CardsSaga } from "../Cards/CardsSagas";

export function* watchSagas() {
  yield all([CardsSaga()]);
}