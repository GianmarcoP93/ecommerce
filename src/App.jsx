import { useSelector } from "react-redux";
import { Cards } from "./Components/Cards";
import { Navbar } from "./Components/Navbar";
import { useFetchApi } from "./fetch";
import { useState } from "react";
import { Footer } from "./Components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProductsDetails } from "./Components/ProductsDetails";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { ProductCarousel } from "./Components/ProductCarousel";

function App() {
  useFetchApi();

  const location = useLocation();
  const products = useSelector((state) => state.products.value.products);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.title
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
      )
    : products;

  const showNavbarAndFooter = !(
    location.pathname === "/register" || location.pathname === "/login"
  );

  return (
    <div className=" bg-slate-300">
      {showNavbarAndFooter && <Navbar setSearchQuery={setSearchQuery} />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Cards products={filteredProducts} searchQuery={searchQuery} />
          }
        />
        <Route path="/product/:title" element={<ProductsDetails />} />
      </Routes>

      {showNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
