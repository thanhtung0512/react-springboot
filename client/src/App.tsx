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

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    // setDrink({ ...drink, price: 6 });
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <Fragment>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click me</button>
    </Fragment>
  );
}

export default App;
