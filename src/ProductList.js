import React, { useContext } from "react";
import { ProductContext } from "./ProductProvider";

const ProductList = () => {
  const { products, addToCart } = useContext(ProductContext);

  const handleBuyClick = (productId, size) => {
    addToCart(productId, size);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Quantity - Large: {product.quantity.large}</p>
          <p>Quantity - Medium: {product.quantity.medium}</p>
          <p>Quantity - Small: {product.quantity.small}</p>
          <button onClick={() => handleBuyClick(product.id, "large")}>
            Buy - Large
          </button>
          <button onClick={() => handleBuyClick(product.id, "medium")}>
            Buy - Medium
          </button>
          <button onClick={() => handleBuyClick(product.id, "small")}>
            Buy - Small
          </button>
         
        </div>
      ))}
    </div>
  );
};

export default ProductList;
