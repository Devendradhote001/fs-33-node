import React from "react";
import { NavLink, useNavigate } from "react-router";

const Nvabar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-2 flex gap-10 items-center justify-between">
      <img
        width={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWS-RsyrkfIVwCyRB7L8SECa40zRl0VkJMQ&s"
        alt=""
      />
      <nav className="flex gap-10 text-xl font-semibold">
        <NavLink to="/home">Women</NavLink>
        <NavLink to="/home/mens">Men</NavLink>
        <NavLink to="/home/kids">Kids</NavLink>
      </nav>
      <div>
        <button
          onClick={() => navigate("/home/create-product")}
          className="px-4 py-2 rounded bg-blue-600 text-white cursor-pointer"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Nvabar;
