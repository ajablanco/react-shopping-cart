import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Navigation = () => {
  const cart = useContext(CartContext);
  return (
    <div className="navigation">
      <h1 style={{ color: "white", fontSize: "2rem", marginLeft: "2%" }}>Aja's Favorite Books</h1>
      <div>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
