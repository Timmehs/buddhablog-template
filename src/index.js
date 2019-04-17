import { hot } from "react-hot-loader/root";
import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import store from "./store";
import "./style/main.scss";
const App = hot(Main);

render(
  <App pages={store.pages} posts={store.posts} />,
  document.getElementById("buddhablog")
);
