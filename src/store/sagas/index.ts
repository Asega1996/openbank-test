import { all } from "redux-saga/effects";
import { passwordManagerSagas } from "./passwordManager";

export default function* rootSaga() {
  yield all([...passwordManagerSagas]);
}