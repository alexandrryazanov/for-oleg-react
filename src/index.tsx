import React from "react";
import "./index.css";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import ThemeProvider from "../src/contexts/themeContext/Provider";
import AlertProvider from "../src/contexts/alertContext/Provider";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

const store = createStore(
  rootReducer,
  { users: [{ name: "alex" }] },
  applyMiddleware(thunk)
);

// Initial render: Render an element to the root.
root.render(
  <ThemeProvider>
    <AlertProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AlertProvider>
  </ThemeProvider>
);
