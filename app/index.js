import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./components/root";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = createRoot(document.querySelector("#root"));

const theme = createTheme();

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
