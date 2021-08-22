import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import posts from "./reducers/posts";
import Content from "./Content";

const store = createStore(
  posts,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function Hw22() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}
