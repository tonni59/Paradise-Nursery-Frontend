import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (

    <nav
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"15px 40px",
        background:"#2e8b57",
        color:"white"
      }}
    >

      <h2>🌿 Paradise Nursery</h2>

      <div>

        <Link
          to="/"
          style={{marginRight:"20px",color:"white"}}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{marginRight:"20px",color:"white"}}
        >
          Plants
        </Link>

        <Link
          to="/cart"
          style={{color:"white"}}
        >
          🛒 {totalItems}
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;