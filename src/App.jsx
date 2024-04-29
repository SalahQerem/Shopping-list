import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import { cartReducer } from "./components/Cart/Reducer/cartReducer.js";
import CheckoutForm from "./components/CheckoutForm";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  let [cartProducts, dispatchCart] = useReducer(cartReducer, []);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutFormOpen, setCheckoutFormOpen] = useState(false);

  const toggleCartDrawer = (newOpen) => {
    setCartOpen(newOpen);
  };

  const toggleCheckoutFormDrawer = (newOpen) => {
    setCheckoutFormOpen(newOpen);
  };

  return (
    <>
      <Navbar toggleCartDrawer={toggleCartDrawer} />
      <Products cartProducts={cartProducts} dispatchCart={dispatchCart} />
      <Cart
        cartProducts={cartProducts}
        dispatchCart={dispatchCart}
        cartOpen={cartOpen}
        toggleCartDrawer={toggleCartDrawer}
        toggleCheckoutFormDrawer={toggleCheckoutFormDrawer}
      />
      <CheckoutForm
        checkoutFormOpen={checkoutFormOpen}
        toggleCheckoutFormDrawer={toggleCheckoutFormDrawer}
      />
      <ToastContainer />
    </>
  );
}

export default App;
