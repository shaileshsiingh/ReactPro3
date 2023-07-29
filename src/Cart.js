import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";

const Cart = () => {
  const { cart, products } = useContext(ProductContext);

  const calculateTotalAmount = () => {
    return cart.reduce((totalAmount, item) => {
      const product = products.find((p) => p.id === item.productId);
      return totalAmount + product.price;
    }, 0);
  };

  const calculateTotalAmountForItem = (productId) => {
    const itemTotal = cart.reduce((totalAmount, item) => {
      if(item.productId === productId) {
        const product = products.find((p) => p.id === item.productId);
        return totalAmount + product.price;
      }
      return totalAmount;
    }, 0);
    return itemTotal;
  };

  const calculateItemCountForItem = (productId) => {
    return cart.reduce((count, item) => {
      if(item.productId === productId) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  return (
    <div>
      <h2>
        Cart <span>({cart.length} items)</span>
      </h2>
      {cart.map((item) => (
        <div key={item.productId}>
          
          <p>Size: {item.size}</p>
          <p>Total Amount: ${calculateTotalAmountForItem(item.productId)}</p>
          <p>Quantity: {calculateItemCountForItem(item.productId)}</p>
        </div>
      ))}
      <p>Total Cart Amount: ${calculateTotalAmount()}</p>
    </div>
  );
};

export default Cart;
