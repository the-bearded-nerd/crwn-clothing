import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
// import { CartProvider } from "./context/cart.context";
import { store } from "./store/store";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
