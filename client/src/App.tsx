import { Fragment } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  return (
    <Fragment>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </Fragment>
  );
}

export default App;
