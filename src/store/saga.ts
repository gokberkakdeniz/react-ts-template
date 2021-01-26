import { all, AllEffect, ForkEffect } from "redux-saga/effects";

import { counterSagas } from "./counter";

function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([counterSagas()]);
}

export default rootSaga;
