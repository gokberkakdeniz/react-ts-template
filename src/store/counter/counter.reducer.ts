import {
  CounterAction,
  CounterState,
  DECREMENT,
  INCREMENT,
} from "./counter.types";

const exampleReducer = (
  state: CounterState = 0,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default exampleReducer;
