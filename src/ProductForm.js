import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductProvider";

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: {
      large: 0,
      medium: 0,
      small: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      quantity: {
        ...product.quantity,
        [name]: parseInt(value),
      },
    });
  };

  const handleAddProduct = () => {
    addProduct(product);
    setProduct({
      name: "",
      description: "",
      price: "",
      quantity: {
        large: 0,
        medium: 0,
        small: 0,
      },
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Quantity - Large:</label>
        <input
          type="number"
          name="large"
          value={product.quantity.large}
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <label>Quantity - Medium:</label>
        <input
          type="number"
          name="medium"
          value={product.quantity.medium}
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <label>Quantity - Small:</label>
        <input
          type="number"
          name="small"
          value={product.quantity.small}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
