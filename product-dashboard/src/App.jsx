//task 2: create App component

import React, {useState} from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const initialProducts = [
    {id: 1, name: "stickerPack", price: 6, description: "pack of 100 stickers"},
    {id: 2, name: "mechPencil", price: 3, description: "one mechanical pencil with extra lead"},
    {id: 3, name: "notebook", price: 9, description: "100 page lined spiral notebook"},
  ];
  //initial array of product objects

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts([...products, {...newProduct, id: products.length + 1}]);
  }
  //functionto add new products to the array

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products}/>
      <AddProductForm addProduct={addProduct}/>
    </div>
    //passes products to ProductList and addProduct to AddProductForm
  );
};

export default App;