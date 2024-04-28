import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { txtSlicer } from "../utils/functions.js";

const Product = ({ product }) => {
  const { title, description, images, price } = product;
  console.log(product);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 250 }} image={images[0]} title={title} />
      <CardContent>
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
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
