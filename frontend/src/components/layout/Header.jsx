import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container">
          <span>PC Upgrade Store</span>
          <span>Chào mừng bạn đến với cửa hàng</span>
        </div>
      </div>

      <div className="container header-main">
        <Link to="/" className="store-logo">
          <span className="logo-icon">PC</span>

          <span className="logo-text">
            UPGRADE
            <small>STORE</small>
          </span>
        </Link>

        <SearchBar />

        <div className="header-actions">
          <Link to="/login">Tài khoản</Link>
          <Link to="/cart">Giỏ hàng</Link>
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;