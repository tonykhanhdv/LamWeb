import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <span className="hero-label">PC UPGRADE STORE</span>

        <h1>Xây dựng bộ PC theo cách của bạn</h1>

        <p>
          Khám phá linh kiện máy tính, lựa chọn cấu hình
          phù hợp và trải nghiệm lắp ráp PC 3D.
        </p>

        <div className="hero-actions">
          <Link to="/products" className="hero-button primary">
            Xem sản phẩm
          </Link>

          <Link to="/pc-builder" className="hero-button secondary">
            Tự build PC
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <span className="hero-visual-label">PC BUILD</span>
        <span className="hero-visual-subtitle">YOUR SETUP. YOUR WAY.</span>
      </div>
    </section>
  );
}

export default HeroBanner;