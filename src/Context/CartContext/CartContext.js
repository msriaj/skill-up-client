import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartInfo = createContext();
const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [purchasedCourse, setPurchasedCourse] = useState(null);

  useEffect(() => {
    localStorage.setItem("purchased", JSON.stringify(cart));
  }, [cart, purchasedCourse]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("purchased"));
    if (items) {
      setPurchasedCourse(items);
    }
  }, []);

  const allCartInfo = {
    cart,
    purchasedCourse,
    addtocart: setCart,
    setPurchasedCourse,
  };
  return <CartInfo.Provider value={allCartInfo}> {children}</CartInfo.Provider>;
};

export default CartContext;
