import React, { useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";

const baseUrl = "https://fakestoreapi.com/products";

const Store = () => {
  const [endPoint, setEndPoint] = useState("");

  const { data, isLoding, err } = useFetch(baseUrl + endPoint);
  return (
    <div>
      <h1>Store</h1>
    </div>
  );
};

export default Store;
