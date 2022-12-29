import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login();
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-red-400">
        <FiShoppingBag />
        <h1>Shopee</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}

        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </nav>
    </header>
  );
};

export default Navbar;
