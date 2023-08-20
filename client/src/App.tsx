import { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
function App() {

  const [cartItems, setCartItems] = useState(['Product1', 'Product2','Product3']);
 

  const onClear  = () => {
    setCartItems([]);
  };

  return (
    <Fragment>
      <NavBar cartItemsCount={cartItems.length} ></NavBar>
      <Cart cartItems={cartItems} onClear={onClear}></Cart>
    </Fragment>
  );
}

export default App;
