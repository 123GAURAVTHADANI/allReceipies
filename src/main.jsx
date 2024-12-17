import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Router from "./Components/Routers/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";

store.subscribe(() => {
  console.log(">>state", store.getState());
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
