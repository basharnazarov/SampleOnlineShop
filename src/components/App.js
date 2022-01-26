import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import Homepage from "./Homepage";
import Cart from "./Cart";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
