import { useState } from "react"
import { updateProduct } from "../services/api"

function UpdateProduct() {

    const [id, setId] = useState("")
    const [product, setProduct] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const handleUpdate = async () => {

        await updateProduct(id, {
            product,
            category,
            quantity,
            price
        })

        alert("Product Updated")

    }

    return (

        <div>

            <h2>Update Product</h2>

            <input
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />  
            <br/>

            <input
                placeholder="Product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
            />
            <br/>

            <input
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <br/>
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <br/>
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br/>
            <button onClick={handleUpdate}>
                Update
            </button>

        </div>

    )

}

export default UpdateProduct