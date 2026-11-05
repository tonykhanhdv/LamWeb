import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <span>PC COMPONENT</span>
        )}
      </Link>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        <p className="product-price">{formattedPrice}</p>

        <Link
          to={`/products/${product.id}`}
          className="product-detail-button"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;