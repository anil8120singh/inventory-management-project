import { useState } from "react"
import { searchProduct } from "../services/api"

function SearchProduct(){

const [id,setId] = useState("")
const [product,setProduct] = useState(null)

const handleSearch = async()=>{
const res = await searchProduct(id)
setProduct(res.data)
}

return(

<div>

<h2>Search Product</h2>

<input
placeholder="Enter ID"
value={id}
onChange={(e)=>setId(e.target.value)}
/>

<button onClick={handleSearch}>
Search
</button>

{product && (

<div>

<p>ID : {product.id}</p>
<p>Product : {product.product}</p>
<p>Category : {product.category}</p>
<p>Quantity : {product.quantity}</p>
<p>Price : {product.price}</p>

</div>

)}

</div>

)

}

export default SearchProduct