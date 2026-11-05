import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Linh kiện PC", path: "/products" },
  { label: "PC Build sẵn", path: "/prebuilt" },
  { label: "PC Builder", path: "/pc-builder" },
  { label: "Mô phỏng lắp ráp", path: "/simulation" },
  { label: "Quản trị", path: "/admin" },
];

function Navigation() {
  return (
    <nav className="main-navigation">
      <div className="container navigation-inner">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;