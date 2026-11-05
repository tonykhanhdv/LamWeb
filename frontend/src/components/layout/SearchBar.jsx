import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (!keyword.trim()) return;

    navigate(
      `/products?search=${encodeURIComponent(keyword.trim())}`
    );
  }

  return (
    <form className="header-search" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Bạn cần tìm linh kiện, PC hay phụ kiện?"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button type="submit">Tìm kiếm</button>
    </form>
  );
}

export default SearchBar;