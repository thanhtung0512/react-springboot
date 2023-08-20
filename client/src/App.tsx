import { Fragment, useState } from "react";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({...drink,price: 6});
  };

  return (
    <Fragment>
      {drink.price}
      <button onClick={handleClick}>Click me</button>
    </Fragment>
  );
}

export default App;
