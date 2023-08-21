import { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

import ExpandableText from "./components/ExpandableText";
import { current } from "immer";

function App() {

  const [currentNumberChar, setCurrentNumberChar] = useState(100);

  
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam accusantium voluptatem fugiat, obcaecati maiores in iusto suscipit nesciunt perspiciatis impedit repellat officiis nemo rem debitis hic saepe dolor sapiente provident quas, deleniti sint! In sint rerum vel vitae! Consequuntur amet ipsa beatae voluptatum deserunt, omnis aperiam ea? Dolore deserunt cupiditate doloribus neque quasi quae eos tenetur id sunt cumque doloremque impedit quos dolor perspiciatis vitae aliquam blanditiis repellat, iure, reiciendis obcaecati a rerum debitis. Itaque laudantium numquam ipsum voluptatum sed beatae odit. Dolore recusandae maiores autem nihil, inventore optio reprehenderit totam doloribus quo beatae distinctio saepe debitis blanditiis! Nulla, ex?";

  const handleClick = () => {
    setCurrentNumberChar(text.length);
  };

  return (
    <>
      <ExpandableText maxChar={currentNumberChar} handleClick={handleClick}>
        {text}
      </ExpandableText>
    </>
  );
}

export default App;
