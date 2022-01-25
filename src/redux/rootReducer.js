import { combineReducers } from "redux"; // Pour combiner les reducers ensemble
import { likesReducer } from "./likesReducer"; // Importation d'un reducer pour gérer les likes
import { inputReducer } from "./inputReducer"; // Importation d'un reducer pour gérer le titre
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  appReducer,
});
