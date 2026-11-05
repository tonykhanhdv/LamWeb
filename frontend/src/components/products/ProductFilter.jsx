import { categories } from "../../data/mockProducts";

function ProductFilter({ selectedCategory, onCategoryChange }) {
  return (
    <aside className="product-filter">
      <h3>Danh mục sản phẩm</h3>

      <label className="filter-option">
        <input
          type="radio"
          name="category"
          checked={!selectedCategory}
          onChange={() => onCategoryChange("")}
        />
        Tất cả sản phẩm
      </label>

      {categories.map((category) => (
        <label className="filter-option" key={category.id}>
          <input
            type="radio"
            name="category"
            checked={selectedCategory === category.id}
            onChange={() => onCategoryChange(category.id)}
          />
          {category.name}
        </label>
      ))}
    </aside>
  );
}

export default ProductFilter;