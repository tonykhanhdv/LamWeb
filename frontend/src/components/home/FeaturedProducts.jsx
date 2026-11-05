import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { mockProducts } from "../../data/mockProducts";

function FeaturedProducts() {
  const featuredProducts = mockProducts.filter(
    (product) => product.featured
  );

  return (
    <section className="home-section">
      <div className="section-heading">
        <h2>Sản phẩm nổi bật</h2>
        <Link to="/products">Xem tất cả</Link>
      </div>

      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;