import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "./rootReducer";

export const makeStore = () => {
  const store = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware())
  );
  return store;
};

export const wrapper = createWrapper(makeStore);
