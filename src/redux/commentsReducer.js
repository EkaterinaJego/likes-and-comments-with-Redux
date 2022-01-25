import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
} from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMMENT_UPDATE:
      const { data } = action; // les comments màJ qui arrivent avec l'action
      const { comments } = state; // les comments initiaux qui sont stockés dans le state;
      const itemIndex = comments.findIndex((res) => res.id === data.id); // pour retrouver l'index d'un comment qu'on veut changer

      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];

      return {
        ...state,
        comments: nextComments,
      };

    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state; // les comments initiaux qui sont stockés dans le state;
        const itemIndex = comments.findIndex((res) => res.id === id); // pour retrouver l'index d'un comment qu'on veut changer
        const nextComments = [
          ...comments.slice(0, itemIndex),
          ...comments.slice(itemIndex + 1),
        ];

        return {
          ...state,
          comments: nextComments,
        };
      })(); // !! pour éviter que les comments soient considérés comme déjà declarés dans l'autre case

    case COMMENTS_LOAD:
      const commentsNew = action.data.map((res) => {
        return {
          text: res.name,
          id: res.id,
        };
      });
      return {
        ...state,
        comments: commentsNew,
      };

    default:
      return state;
  }
};
