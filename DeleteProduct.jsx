import { useState } from "react"
import { deleteProduct } from "../services/api"

function DeleteProduct(){

const [id,setId] = useState("")

const handleDelete = async()=>{

await deleteProduct(id)

alert("Product Deleted")

}

return(

<div>

<h2>Delete Product</h2>

<input
placeholder="Enter ID"
value={id}
onChange={(e)=>setId(e.target.value)}
/>

<button onClick={handleDelete}>
Delete
</button>

</div>

)

}

export default DeleteProduct