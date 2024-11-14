//task 6: create the AddProductForm component

import React from "react";

const AddProductForm = ({addProduct}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //useState to set initial values in each field for new product

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            price: parseFloat(price), //converts price to number
            description,
        };
        //creates new product object

        addProduct(newProduct);
        //callback function

        setName("");
        setPrice("");
        setDescription("");
        //resets form after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Product</button>
        </form>
    ); //input areas for the name, price, and description. button to submit
};

export default AddProductForm;