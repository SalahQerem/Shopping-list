import { Box, Button, ListItem, Typography } from "@mui/material";
import React from "react";

const CartItem = ({ product, handleDeleteProduct }) => {
  const { id, title, price, images } = product;
  return (
    <ListItem>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          width: "100%",
        }}
      >
        <img src={images[0]} alt="product image" width={100} />
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color="text.primary" component="div">
              ${price}
            </Typography>
            <Button
              size="small"
              variant="contained"
              onClick={() => handleDeleteProduct(id)}
            >
              remove
            </Button>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};

export default CartItem;
