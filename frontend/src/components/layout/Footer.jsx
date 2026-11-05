import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <h3>PC UPGRADE STORE</h3>
          <p>
            Website bán linh kiện máy tính,
            hỗ trợ xây dựng cấu hình và mô phỏng lắp ráp PC.
          </p>
        </div>

        <div>
          <h4>Khám phá</h4>
          <Link to="/products">Linh kiện PC</Link>
          <Link to="/pc-builder">PC Builder</Link>
          <Link to="/simulation">Mô phỏng lắp ráp</Link>
        </div>

        <div>
          <h4>Tài khoản</h4>
          <Link to="/login">Đăng nhập</Link>
          <Link to="/cart">Giỏ hàng</Link>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 PC Upgrade Store
      </div>
    </footer>
  );
}

export default Footer;