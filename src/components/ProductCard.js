import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ plant }) {

const dispatch = useDispatch();

const handleAdd = () => {

dispatch(addToCart(plant));

};

return (

<div className="card">

<img
src={plant.image}
alt={plant.name}
/>

<h3>{plant.name}</h3>

<p>${plant.price}</p>

<button onClick={handleAdd}>

Add To Cart

</button>

</div>

);

}

export default ProductCard;