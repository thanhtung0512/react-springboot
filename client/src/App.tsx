import { Fragment, useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const items = ['a', 'b', 'c'];
  const heading = 'List';

  const [isClickButton, setIsClickButton] = useState(false);
  const [isShow,setIsShow] = useState(false);
  const hanleOnClick = () => {
    console.log("Click this button");
    setIsClickButton(true);
    if(isShow === false) {
      setIsShow(true);
    }
    else {
      setIsShow(false);
    }
  };

  return (
    <Fragment>

      
      {isClickButton === true && isShow === true ? (
        <Alert>
          Hello <span>World</span>
        </Alert>
      ) : null}

      <Button color="secondary" onClick={hanleOnClick}>
        MyButton
      </Button>

      <ListGroup items={items} heading={heading} onSelectItem={function (item: string): void {
        console.log(item);
      } }></ListGroup>
    </Fragment>
  );
}

export default App;
