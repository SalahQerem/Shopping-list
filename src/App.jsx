import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartReducer } from "./Reducers/CartReducer.js";
import CheckoutForm from "./components/CheckoutForm";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import CartDrawer from "./Drawers/CartDrawer";

function App() {
  let [cartProducts, dispatchCart] = useReducer(CartReducer, []);
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
      <CartDrawer
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
