import { useEffect,useState } from "react"
import { getProducts } from "../services/api"

function GetProducts({refresh}){

const [products,setProducts] = useState([])

const fetchProducts = async()=>{
const res = await getProducts()
setProducts(res.data)
}

useEffect(()=>{
fetchProducts()
},[refresh])   // 👈 refresh change hone par API call

return(

<div>

<h2>Product List</h2>

<table border="1">

<thead>
<tr>
<th>ID</th>
<th>Product</th>
<th>Category</th>
<th>Quantity</th>
<th>Price</th>
</tr>
</thead>

<tbody>

{products.map((p)=>(
<tr key={p.id}>

<td>{p.id}</td>
<td>{p.product}</td>
<td>{p.category}</td>
<td>{p.quantity}</td>
<td>{p.price}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default GetProducts