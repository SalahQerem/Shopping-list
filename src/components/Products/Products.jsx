import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Loader from "../Loader";
import { CustomSuccessAlert, CustomWarningAlert } from "../utils/functions.js";
import { productsReducer } from "./Reducer/productsReducer.js";
import Product from "./components/Product.jsx";

const Products = ({ cartProducts, dispatchCart }) => {
  let [products, dispatchProducts] = useReducer(productsReducer, []);
  let [isLoading, setIsLoading] = useState(false);

  const handleAddProducts = (product) => {
    if (cartProducts.find((item) => item.id === product.id)) {
      CustomWarningAlert("This Product has already been added");
      return;
    }
    dispatchCart({
      type: "add",
      product,
    });
    CustomSuccessAlert("This Product has been added");
  };

  const renderProducts = products?.map((product) => (
    <Grid key={product.id} item xs={3}>
      <Product product={product} handleAddProducts={handleAddProducts} />
    </Grid>
  ));

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      dispatchProducts({ type: "set", products: data.slice(0, 48) });
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <Grid container spacing={4} width={"80%"} sx={{ margin: "1rem auto" }}>
      {renderProducts}
    </Grid>
  );
};

export default Products;
