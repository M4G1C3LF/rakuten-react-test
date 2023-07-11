import { combineReducers } from "redux";
import Movie from "./movie/reducer";
import Ui from "./ui/reducer";

const rootReducer = combineReducers({
  Movie,
  Ui
});

export default rootReducer;
