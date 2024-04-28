import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Loader from "../Loader";
import { productsReducer } from "./productsReducer.js";
import Product from "../Product/Product.jsx";
import { Grid } from "@mui/material";

const Products = () => {
  let [products, dispatch] = useReducer(productsReducer, []);
  let [isLoading, setIsLoading] = useState(false);

  const renderProducts = products?.map((product) => (
    <Grid key={product.id} item xs={3}>
      <Product product={product} />
    </Grid>
  ));

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      dispatch({ type: "set", products: data.slice(1, 20) });
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <Grid container spacing={2} width={"80%"} sx={{ margin: "1rem auto" }}>
      {renderProducts}
    </Grid>
  );
};

export default Products;
