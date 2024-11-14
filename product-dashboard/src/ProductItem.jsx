//task 4: create the ProductItem component

import React from "react";

const ProductItem = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}; //renders and displays the details of each specific product item

export default ProductItem;