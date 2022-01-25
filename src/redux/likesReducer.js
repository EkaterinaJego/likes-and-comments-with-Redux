import { INCREMENT, DECREMENT } from "./types";

const initialState = {
  likes: 0,
};

const minLikes = (likes) => {
  if (likes - 1 < 0) {
    return 0;
  } else {
    return likes - 1;
  }
};

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, likes: state.likes + 1 };
    case DECREMENT:
      return { ...state, likes: minLikes(state.likes) };
    default:
      return state;
  }
};
