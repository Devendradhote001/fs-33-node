import React from "react";
import { NavLink } from "react-router";

const Nvabar = () => {
  return (
    <div className="px-6 py-2 flex gap-10 items-center">
      <img
        width={50}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWS-RsyrkfIVwCyRB7L8SECa40zRl0VkJMQ&s"
        alt=""
      />
      <nav className="flex gap-4">
        <NavLink to="/home">Women</NavLink>
        <NavLink to="/home/mens">Men</NavLink>
        <NavLink to="/home/kids">Kids</NavLink>
      </nav>
    </div>
  );
};

export default Nvabar;
