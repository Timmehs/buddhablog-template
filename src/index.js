import store from "./store";
import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import "./style/main.scss";

render(
  <Main pages={store.pages} posts={store.posts} />,
  document.getElementById("buddhablog")
);
