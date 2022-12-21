import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <h1>Shopee</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products/new" className="text-2xl"></Link>
        <button>Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
