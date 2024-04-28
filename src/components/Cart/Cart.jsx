import { Box, Divider, Drawer, List } from "@mui/material";
import React from "react";
import CartItem from "./components/CartItem.jsx";

const Cart = ({ cartProducts, dispatchCart, toggleCartDrawer, cartOpen }) => {
  const renderCartProducts = cartProducts.map((product) => (
    <CartItem key={product.id} product={product} />
  ));
  return (
    <Drawer anchor="right" open={cartOpen} onClose={toggleCartDrawer(false)}>
      <Box
        sx={{ width: 500 }}
        role="presentation"
        onClick={toggleCartDrawer(false)}
      >
        <List>{renderCartProducts}</List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Cart;
