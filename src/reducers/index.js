import { combineReducers } from "redux";

import reducer from "./favorites";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  reducer,
  movieReducer,
});

export default rootReducer;
