export const cartReducer = (cartProducts, action) => {
  switch (action.type) {
    case "add": {
      return [...cartProducts, action.product];
    }
  }
};
