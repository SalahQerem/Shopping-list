import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import React from "react";

const CheckoutForm = ({ checkoutFormOpen, toggleCheckoutFormDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={checkoutFormOpen}
      onClose={toggleCheckoutFormDrawer(false)}
    >
      <Box
        sx={{
          width: 520,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
        role="presentation"
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" align="center" mt={2}>
            Order Confirmation
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 5,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Your Name"
              variant="outlined"
              name="name"
              type="text"
              fullWidth
            />
            <TextField
              id="email"
              label="Your Email"
              variant="outlined"
              name="email"
              type="email"
              fullWidth
            />
            <Button
              variant="contained"
              onClick={toggleCheckoutFormDrawer(false)}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CheckoutForm;
