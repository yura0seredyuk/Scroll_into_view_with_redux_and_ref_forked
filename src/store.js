import { createStore, combineReducers } from "redux";
import postReducer from "./postReducer";

const store = createStore(
  combineReducers({
    posts: postReducer
  })
);

export default store;
