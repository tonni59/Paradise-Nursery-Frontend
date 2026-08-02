import ProductCard from "../components/ProductCard";
import plants from "../data/plants";

import "../styles/products.css";

function ProductList() {
  const categories = ["Air Purifying", "Succulents", "Flowering"];

  return (
    <div className="products-page">
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="grid">
            {plants

              .filter((plant) => plant.category === category)

              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
