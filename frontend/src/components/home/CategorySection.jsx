import { Link } from "react-router-dom";
import { categories } from "../../data/mockProducts";

function CategorySection() {
  return (
    <section className="home-section">
      <div className="section-heading">
        <h2>Danh mục linh kiện</h2>
        <Link to="/products">Xem tất cả</Link>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${encodeURIComponent(category.id)}`}
            className="category-card"
          >
            <span className="category-icon">
              {category.icon}
            </span>

            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;