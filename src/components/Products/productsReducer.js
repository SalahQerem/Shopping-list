export const productsReducer = (products, action) => {
  switch (action.type) {
    case "set": {
      return [...action.products];
    }
  }
};
