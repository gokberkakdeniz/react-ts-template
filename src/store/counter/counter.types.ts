export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterState = number;

export type CounterAction = IncrementAction | DecrementAction;
