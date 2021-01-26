import { ForkEffect, takeEvery } from "redux-saga/effects";
import { DECREMENT, INCREMENT } from "./counter.types";

function* exampleSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery([INCREMENT, DECREMENT], (action) => {
    // eslint-disable-next-line no-console
    console.log(action.type);
  });
}

export default exampleSaga;
