import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";

import "../styles/cart.css";

function Cart() {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (

    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {
        cartItems.length === 0 ? (

          <div className="empty-cart">

            <h2>Your cart is empty.</h2>

            <Link to="/products">

              <button>

                Continue Shopping

              </button>

            </Link>

          </div>

        ) : (

          <>

            {
              cartItems.map((item) => (

                <CartItem
                  key={item.id}
                  item={item}
                />

              ))
            }

            <div className="cart-summary">

              <h2>Total Items: {totalItems}</h2>

              <h2>Total Price: ${totalPrice}</h2>

              <div className="summary-buttons">

                <Link to="/products">

                  <button>

                    Continue Shopping

                  </button>

                </Link>

                <button
                  onClick={() =>
                    alert("Order placed successfully!")
                  }
                >

                  Checkout

                </button>

              </div>

            </div>

          </>

        )
      }

    </div>

  );

}

export default Cart;