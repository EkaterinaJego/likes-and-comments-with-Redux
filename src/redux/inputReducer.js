import { INPUT_TEXT } from "./types";

const initialState = {
  text: "",
};

export const inputReducer = (state = initialState, action) => {
  console.log("Input text reducer=>", action);
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
};
