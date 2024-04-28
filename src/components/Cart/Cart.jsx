import { Box, Button, Drawer, List, Typography } from "@mui/material";
import React from "react";
import { CustomSuccessAlert } from "../utils/functions.js";
import CartItem from "./components/CartItem.jsx";

const Cart = ({
  cartProducts,
  dispatchCart,
  cartOpen,
  toggleCartDrawer,
  setCartOpen,
  setCheckoutFormOpen,
}) => {
  const handleDeleteProduct = (productId) => {
    dispatchCart({
      type: "delete",
      productId,
    });
    CustomSuccessAlert("This Product has been deleted");
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutFormOpen(true);
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
            borderBlockStart: "1px solid",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Total Price:</Typography>
            <Typography variant="h6">${totalPrice}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mt: 1,
            }}
          >
            <Button variant="contained" onClick={handleCheckout}>
              Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;
