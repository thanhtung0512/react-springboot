import { Fragment, useState } from "react";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import produce from "immer";
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

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: "false" },
    { id: 2, title: "Bug 2", fixed: "false" },
  ]);

  const handleClick = () => {
    // setDrink({ ...drink, price: 6 });
    // setCustomer({
    //   ...customer,
    //   address: { ...customer.address, zipCode: 94112 },
    // });

    // setTags([...tags, "exciting"]);

    // //Remove
    // setTags(tags.filter((tag) => tag !== "happy"));

    // //Update
    // setTags(tags.map((tag) => (tag === "happy" ? "hapiness" : tag)));

    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: "true" } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = "true";
        }
      })
    );
  };

  return (
    <Fragment>
      {bugs.map((bug) => (
        <div>
          {bug.id} {bug.title} {bug.fixed}
        </div>
      ))}
      <button onClick={handleClick}>Click me</button>
    </Fragment>
  );
}

export default App;
