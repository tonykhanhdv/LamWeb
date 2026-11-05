import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { mockProducts } from "../data/mockProducts";

import ProductFilter from "../components/products/ProductFilter";
import ProductSort from "../components/products/ProductSort";
import ProductGrid from "../components/products/ProductGrid";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";
  const keyword = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "default";

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  }

  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    if (category) {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (keyword.trim()) {
      const search = keyword.trim().toLocaleLowerCase("vi-VN");

      result = result.filter((product) =>
        product.name.toLocaleLowerCase("vi-VN").includes(search)
      );
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    }

    return result;
  }, [category, keyword, sort]);

  return (
    <div className="container products-page">
      <div className="products-heading">
        <div>
          <h1>Linh kiện máy tính</h1>
          <p>Tìm kiếm và lựa chọn linh kiện phù hợp.</p>
        </div>

        <span>{filteredProducts.length} sản phẩm</span>
      </div>

      {keyword && (
        <p className="search-result-label">
          Kết quả tìm kiếm cho: <strong>{keyword}</strong>
        </p>
      )}

      <div className="products-layout">
        <ProductFilter
          selectedCategory={category}
          onCategoryChange={(value) =>
            updateFilter("category", value)
          }
        />

        <section className="products-content">
          <ProductSort
            sort={sort}
            onSortChange={(value) =>
              updateFilter("sort", value === "default" ? "" : value)
            }
          />

          <ProductGrid products={filteredProducts} />
        </section>
      </div>
    </div>
  );
}

export default Products;