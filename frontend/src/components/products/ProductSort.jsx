function ProductSort({ sort, onSortChange }) {
  return (
    <div className="product-sort">
      <label htmlFor="sort-products">Sắp xếp:</label>

      <select
        id="sort-products"
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Mặc định</option>
        <option value="price-asc">Giá tăng dần</option>
        <option value="price-desc">Giá giảm dần</option>
        <option value="name-asc">Tên A–Z</option>
      </select>
    </div>
  );
}

export default ProductSort;