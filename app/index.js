import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./components/Root";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

import UserAccountPage from "./components/UserAccountPage";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);
