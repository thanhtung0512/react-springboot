import { Fragment } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const hanleOnClick = () => {
    console.log("Click this button");
  };

  return (
    <Fragment>
      <Alert>
        Hello <span>World</span>
      </Alert>

      <Button color="secondary" onClick={hanleOnClick}>MyButton</Button>
    </Fragment>
  );
}

export default App;
