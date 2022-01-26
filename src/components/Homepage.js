import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

import CartItem from "./CartItem";

const style = {
  navbar: {
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "5px",
  },
  h2: {
    textAlign: "center",
  },
  rest: {
    margin: "0 3px",
    padding: "5px",
  },
};

const Homepage = () => {
  const { totalUniqueItems } = useCart();
  return (
    <div>
      <div style={style.navbar}>
        <div>Fintech Online Shop</div>
        <div>
          <button style={style.rest}>Sign Up</button>
          <Link to="/cart">
            <button style={style.rest}>Cart [ {totalUniqueItems} ]</button>
          </Link>
        </div>
      </div>
      <h1 style={style.h2}>Mahsulotlar ro'yxati:</h1>
      <CartItem />
    </div>
  );
};

export default Homepage;
