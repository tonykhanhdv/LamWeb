import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PCBuilder from "./pages/PCBuilder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pc-builder" element={<PCBuilder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;