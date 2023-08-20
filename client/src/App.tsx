import { Fragment, useState } from "react";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    contact: {
      address: {
        street: ''
      }
    }
  })
  

  return (
    <Fragment>
      <Message/>
      <Message/>
      <Message/>
    </Fragment>
  );
}

export default App;
