import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/favorite"}>
        <button>Favorites</button>
      </Link>
    </div>
  );
}
