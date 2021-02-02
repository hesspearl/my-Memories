import { CREATE, actionTypes, DELETE_POST, UPDATE } from "./action/types";

const posts: InputState[] = [];

export default (state = posts, action: actionTypes): InputState[] => {
  switch (action.type) {
    case CREATE:
      return [...state, action.value];

    case DELETE_POST:
      return state.filter((i) => i.id !== action.value);

    case UPDATE:
      return state.map((i) => (i.id === action.value.id ? action.value : i));
  }
  return state;
};
