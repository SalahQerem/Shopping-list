import { Box, Divider, Drawer, List } from "@mui/material";
import React from "react";
import CartItem from "./components/CartItem.jsx";
import { CustomSuccessAlert } from "../utils/functions.js";

const Cart = ({ cartProducts, dispatchCart, toggleCartDrawer, cartOpen }) => {
  const handleDeleteProduct = (productId) => {
    dispatchCart({
      type: "delete",
      productId,
    });
    CustomSuccessAlert("This Product has been deleted");
  };
  const renderCartProducts = cartProducts.map((product) => (
    <CartItem
      key={product.id}
      product={product}
      handleDeleteProduct={handleDeleteProduct}
    />
  ));
  return (
    <Drawer anchor="right" open={cartOpen} onClose={toggleCartDrawer(false)}>
      <Box sx={{ width: 500 }} role="presentation">
        <List>{renderCartProducts}</List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Cart;
