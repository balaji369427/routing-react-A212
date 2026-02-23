import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      console.log(response.data);
    } catch (error) {
      console.log("Failed to Fetch Data");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  //https://fakestoreapi.com/products/{id}
  return (
    <div>
      <h1>Product Component {id}</h1>
    </div>
  );
}

export default Product;
