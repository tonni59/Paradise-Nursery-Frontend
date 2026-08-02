import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/cartSlice";

function CartItem({ item }) {

  const dispatch = useDispatch();

  return (

    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-info">

        <h3>{item.name}</h3>

        <p>Price: ${item.price}</p>

        <p>Subtotal: ${item.price * item.quantity}</p>

      </div>

      <div className="cart-buttons">

        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>

        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>

      </div>

    </div>

  );

}

export default CartItem;