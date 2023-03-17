import React from "react";
import ReactDom from "react-dom/client";
import Store from "./components/store";
import './style.scss';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>
);

