import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "lucide-react";
import React from "react";

const Navbar = ({ toggleCartDrawer }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <Button color="inherit" onClick={() => toggleCartDrawer(true)}>
            My Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
