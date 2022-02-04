import {
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { FETCH, fulfill, reject } from "./fetchReducer";
import { fetchPokemon } from "./service";

export default function* saga() {
  yield all([fetchSaga()]);
}

function* fetchSaga() {
  yield takeLatest(FETCH, fetchSagaWorker);
}

function* fetchSagaWorker(action) {
  const { url } = action.payload;
  try {
    const data = yield call(fetchPokemon, url);

    yield put(fulfill(data));
  } catch (error) {
    yield put(reject(error.message));
  }
}
