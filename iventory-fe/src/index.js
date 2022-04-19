import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import ItemPage from "./pages/ItemPage";

ReactDOM.render(
  <Auth0Provider
    domain="dev-8bqfizw3.us.auth0.com"
    clientId="l9SL0ENCIT3VWx5OilNIGIn6GCwhLydU"
    redirectUri={"http://localhost:3000/inventory"}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="add" element={<AddItem />} />
        <Route path="item" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
