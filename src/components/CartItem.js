import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

import fakeData from "../apis/fakeData";

const style = {
  cartItem: {
    margin: "10px",
    borderRadius: "4px",
    rowGap: "4px",
    backgroundColor: "#eee",
    width: "300px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
  },
  img: {
    width: "250px",
    height: "250px",
    margin: "10px 0",
    borderRadius: "4px",
  },
  items: {
    display: "grid",
    gridTemplateColumns:
      window.innerWidth < 1285 ? "auto auto auto" : "auto auto auto auto",
  },
};

const CartItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();
  const [value, setValue] = useState(0);
  // const [itemId, setItemId] = useState(null);
  // const [inputValue, setInputValue] = useState(0);

  // const handleClick = (id) => {
  //   console.log(id);
  // };

  // const handleChange = (e) => {
  //   if (e.target.value === "undefined") {
  //     return "";
  //   }
  //   console.log(e);
  //   console.log(e.target);
  //   setInputValue(e.target.value);
  // };

  useEffect(() => {
    fakeData
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // if (id === null) return "";

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>OOops, smth went wrong!</h1>;
  }
  return (
    <div style={style.items}>
      {products.map((item) => {
        return (
          <div className="cart-item" style={style.cartItem} key={item.id}>
            <img src={item.image} alt="" style={style.img} />
            <h4>Kategoriya: {item.category}</h4>
            <h3>{item.title}</h3>
            <p>Narxi: ${item.price}</p>
            <p>
              Qolgan mahsulotlar:
              {item.rating.count}
            </p>
            <form action="">
              <label name="amount">Miqdor: </label>
              <input
                name="amount"
                type="number"
                onChange={handleChange}
                min="1"
                step="1"
              />
            </form>
            <button
              onClick={() => {
                addItem(item, value);
                item.rating.count = item.rating.count - value;
              }}
            >
              Xarid qilish
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
