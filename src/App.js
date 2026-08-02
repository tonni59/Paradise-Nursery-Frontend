import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/products"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;