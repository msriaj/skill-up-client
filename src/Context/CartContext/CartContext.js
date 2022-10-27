import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartInfo = createContext();
const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [purchasedCourse, setPurchasedCourse] = useState(null);

  useEffect(() => {
    if (Object.keys(cart).length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const purchasedHandler = () => {
    localStorage.setItem("purchased", JSON.stringify(cart));
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      setCart(items);
    }

    const courseOwned = JSON.parse(localStorage.getItem("purchased"));
    if (courseOwned) {
      setPurchasedCourse(courseOwned);
    }
  }, []);

  const allCartInfo = {
    cart,
    purchasedCourse,
    addtocart: setCart,
    setPurchasedCourse,
    purchasedHandler,
  };
  return <CartInfo.Provider value={allCartInfo}> {children}</CartInfo.Provider>;
};

export default CartContext;
