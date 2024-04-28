import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { cartReducer } from "./components/Cart/Reducer/cartReducer.js";
import { useReducer, useState } from "react";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [cartProducts, dispatchCart] = useReducer(cartReducer, []);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCartDrawer = (newOpen) => () => {
    setCartOpen(newOpen);
  };

  return (
    <>
      <Navbar toggleCartDrawer={toggleCartDrawer} />
      <Products cartProducts={cartProducts} dispatchCart={dispatchCart} />
      <Cart
        cartProducts={cartProducts}
        dispatchCart={dispatchCart}
        toggleCartDrawer={toggleCartDrawer}
        cartOpen={cartOpen}
      />
      <ToastContainer />
    </>
  );
}

export default App;
