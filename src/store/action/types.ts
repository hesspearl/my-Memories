import { createStore } from "redux";

export const CREATE = "CREATE";
export const DELETE_POST = "DELETE_POST";
export const UPDATE = "UPDATE";

interface createAction {
  type: typeof CREATE | typeof UPDATE;
  value: InputState;
}

interface deleteAction {
  type: typeof DELETE_POST;
  value: Number;
}

export type actionTypes = createAction | deleteAction;
