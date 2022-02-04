import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import fetch from "./fetchReducer";

const reducers = combineReducers({
  fetch,
});

export default function rootReducer(state = {}, action) {
  let newState = state;
  if (action.type === HYDRATE) {
    newState = { ...state, ...action.payload };
  }
  return reducers(newState, action);
}
