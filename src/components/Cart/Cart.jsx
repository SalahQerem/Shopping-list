import { Box, Divider, Drawer, List, Typography } from "@mui/material";
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

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  const renderCartProducts = cartProducts.map((product) => (
    <CartItem
      key={product.id}
      product={product}
      handleDeleteProduct={handleDeleteProduct}
    />
  ));
  return (
    <Drawer anchor="right" open={cartOpen} onClose={toggleCartDrawer(false)}>
      <Box sx={{ width: 520 }} role="presentation">
        <List>{renderCartProducts}</List>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            width: 520,
            backgroundColor: "white",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBlockStart: "1px solid",
          }}
        >
          <Typography variant="h6">Total Price:</Typography>
          <Typography variant="h6">${totalPrice}</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;
