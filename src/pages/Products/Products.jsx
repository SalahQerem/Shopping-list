import { Grid } from "@mui/material";
import React from "react";
import { products } from "../../utils/data.js";
import {
  CustomSuccessAlert,
  CustomWarningAlert,
} from "../../utils/functions.js";
import Product from "./components/Product.jsx";

const Products = ({ cartProducts, dispatchCart }) => {
  const handleAddProduct = (product) => {
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
    <Grid key={product.id} item xs={12} sm={6} lg={4} xl={3}>
      <Product product={product} handleAddProduct={handleAddProduct} />
    </Grid>
  ));
  return (
    <Grid container spacing={4} width={"80%"} sx={{ margin: "1rem auto" }}>
      {renderProducts}
    </Grid>
  );
};

export default Products;
