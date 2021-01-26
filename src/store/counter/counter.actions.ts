import { CounterAction, DECREMENT, INCREMENT } from "./counter.types";

export const increase = (): CounterAction => ({
  type: INCREMENT,
});

export const decrease = (): CounterAction => ({
  type: DECREMENT,
});
