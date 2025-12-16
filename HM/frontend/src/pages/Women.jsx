import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const Women = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const getAllProducts = async () => {
    try {
      let res = await axiosInstance.get("products?category=WOMENS");
      if (res) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.log("error in pro apis", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Women</h1>
      {products.map((elem) => (
        <h1 key={elem._id}>{elem.productName}</h1>
      ))}
    </div>
  );
};

export default Women;
