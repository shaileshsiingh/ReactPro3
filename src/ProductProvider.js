import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Math.random()}]);
  };

  const addToCart = (productId, size) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: {
              ...product.quantity,
              [size]: product.quantity[size] - 1,
            },
          };
        }
        return product;
      })
    );

    setCart((prevCart) => [...prevCart, { productId, size }]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};
