import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const style = {
  cart: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
  },
  product: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#ddd",
    margin: "20px",
    padding: "10px",
    borderRadius: "5px",
  },
  img: {
    width: "150px",
    height: "150px",
  },
};

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) {
    return (
      <div>
        <Link to="/">
          <button>Back to homepage</button>
        </Link>
        <h1>Savatchada mahsulot topilmadi!</h1>
      </div>
    );
  }
  return (
    <div>
      <Link to="/">
        <button>Back to homepage</button>
      </Link>

      <div style={style.cart}>
        {items.map((item) => {
          return (
            <div style={style.product} key={item.id}>
              <div>
                <img style={style.img} src={item.image} alt="" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <br />
                <h3>Narxi: ${item.price} </h3>
                <i> Kategoriyasi: {item.category}</i>
                <br />
                <h3> Tanlandi: {item.quantity}</h3>
              </div>
              <div>
                <h2> Jami summa: ${item.itemTotal}</h2>
                <button onClick={() => removeItem(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
