import { actionTypes, CREATE, DELETE_POST, UPDATE } from "./types";

export const create = (value: InputState): actionTypes => {
  return { type: CREATE, value };
};

export const deletePost = (id: number): actionTypes => {
  return { type: DELETE_POST, value: id };
};

export const update = (value: InputState): actionTypes => {
  return { type: UPDATE, value };
};
