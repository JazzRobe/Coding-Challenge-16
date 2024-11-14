//task 3: create the ProductList component

import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
        //returns a component shown on the page with each item from array
    );
};

export default ProductList;