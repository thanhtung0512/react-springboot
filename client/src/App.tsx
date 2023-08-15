import { Fragment } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Paris", "London", "Moscow", "Luxembourg", "France"];
  const colors = ["Black", "White", "Blue"];
  return (
    <Fragment>
      <ListGroup items={items} heading={"Cities"} />

      <ListGroup items={colors} heading={"Colors"} />
    </Fragment>
  );
}

export default App;
