import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "./rootReducer";
import saga from "./saga";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.__sagaTask = sagaMiddleware.run(saga);
  return store;
};

export const wrapper = createWrapper(makeStore);
