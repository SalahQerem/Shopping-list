export const cartReducer = (cartProducts, action) => {
  switch (action.type) {
    case "add": {
      return [...cartProducts, action.product];
    }
    case "delete": {
      const filteredProducts = cartProducts.filter(
        (product) => product.id !== action.productId
      );
      return filteredProducts;
    }
  }
};
