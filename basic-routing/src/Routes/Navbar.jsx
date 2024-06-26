import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "lightgray",
        padding: "10px",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
