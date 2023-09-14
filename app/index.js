import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./components/root";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>
);
