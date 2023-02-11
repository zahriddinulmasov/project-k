import { Route, Routes } from "react-router";
import "./App.scss";

import { Header } from "./container/header";
import { Footwear } from "./pages/footwear";
import { AboutUs } from "./pages/aboutUs";
import { Products } from "./pages/products";
import { Sale } from "./pages/sale";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Footwear />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </div>
  );
}

export default App;
