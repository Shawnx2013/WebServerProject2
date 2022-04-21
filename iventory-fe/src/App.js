import Login from "./pages/Login";
import logo from "./logo.svg";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemContext } from "./ItemContext";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import ItemPage from "./pages/ItemPage";
import { useState, useMemo } from "react";

function App() {
  const [token, setToken] = useState("");

  const value = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );
  return (
    <ItemContext.Provider value={value}>
      <Auth0Provider
        domain="dev-8bqfizw3.us.auth0.com"
        clientId="l9SL0ENCIT3VWx5OilNIGIn6GCwhLydU"
        redirectUri={"http://localhost:3000/inventory"}
        audience="https://dev-8bqfizw3.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="add" element={<AddItem />} />
            <Route path="item" element={<ItemPage />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </ItemContext.Provider>
  );
}

export default App;
