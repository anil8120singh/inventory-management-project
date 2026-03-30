import { useState } from "react"
import { createProduct } from "../services/api"

function CreateProduct({ reloadProducts }) {

    const [product, setProduct] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await createProduct({
            product,
            category,
            quantity,
            price
        })

        alert("Product Created")

        reloadProducts()   // 👈 important line

    }


    return (
        <div className="card shadow-sm p-4 mb-4 bg-white rounded border-0">
            <h2 className="mb-3 text-primary">Create Product</h2>
            <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
                <div className="col-md-6">
                    <input
                        className="form-control mb-2"
                        placeholder="Product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        className="form-control mb-2"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        className="form-control mb-2"
                        type="number"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        className="form-control mb-2"
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary px-4" type="submit">Create</button>
                </div>
            </form>
        </div>
    )

}

export default CreateProduct