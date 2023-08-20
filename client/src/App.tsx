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

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // setDrink({ ...drink, price: 6 });
    // setCustomer({
    //   ...customer,
    //   address: { ...customer.address, zipCode: 94112 },
    // });

    setTags([...tags, "exciting"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    setTags(tags.map((tag) => (tag === "happy" ? "hapiness" : tag)));
  };

  return (
    <Fragment>
      {tags.map((tag) => (
        <div>{tag}</div>
      ))}
      <button onClick={handleClick}>Click me</button>
    </Fragment>
  );
}

export default App;
