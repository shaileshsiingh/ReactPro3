import React from "react";
import { ProductProvider } from "./ProductProvider";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  return (
    <ProductProvider>
      <div className="App">
        <ProductForm />
        <ProductList />
        <Cart />
      </div>
    </ProductProvider>
  );
};

export default App;
