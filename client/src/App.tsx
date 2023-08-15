import { Fragment } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Paris", "London", "Moscow", "Luxembourg", "France"];
  const colors = ["Black", "White", "Blue"];
  const handleSelectItem = (item: string) => {
    console.log(item + "Pass function via props");
  }
  return (
    <Fragment>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} />

    </Fragment>
  );
}

export default App;
