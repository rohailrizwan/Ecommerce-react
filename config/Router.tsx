import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Singleproduct from "../pages/Productpages/Singleproduct";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/*" element={<Products />} />
          <Route path="/singleproduct/:id" element={<Singleproduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
