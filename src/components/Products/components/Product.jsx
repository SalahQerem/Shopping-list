import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { txtSlicer } from "../../utils/functions.js";

const Product = ({ product, handleAddProduct }) => {
  const { title, description, images, price } = product;

  return (
    <Card sx={{ maxWidth: 345, height: 470 }}>
      <CardMedia sx={{ height: 250 }} image={images[0]} title={title} />
      <Stack
        height={220}
        justifyContent={"space-between"}
        boxSizing={"border-box"}
      >
        <CardContent sx={{ paddingBlockEnd: 0 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {txtSlicer(description)}
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            component="div"
            sx={{ mt: 2 }}
          >
            ${price}
          </Typography>
        </CardContent>
        <CardActions sx={{}}>
          <Button
            size="medium"
            variant="contained"
            onClick={() => {
              handleAddProduct(product);
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default Product;
