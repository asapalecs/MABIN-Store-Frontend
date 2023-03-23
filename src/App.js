import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Store />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cos" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compara-produs" element={<Compare />} />
            <Route path="favorite" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="recuperare-parola" element={<Forgotpassword />} />
            <Route path="inregistrare" element={<Signup />} />
            <Route path="reseteaza-parola" element={<Resetpassword />} />
            <Route path="confidentialitate" element={<Privacy />} />
            <Route path="rambursare" element={<Refund />} />
            <Route path="livrare" element={<Shipping />} />
            <Route path="termeni-conditii" element={<Terms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
//7:59:07 / 10:17:44