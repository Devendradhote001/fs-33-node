import React from "react";
import { Outlet } from "react-router";
import Nvabar from "../components/Nvabar";

const HomeLayout = () => {
  return (
    <div>
      <Nvabar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
