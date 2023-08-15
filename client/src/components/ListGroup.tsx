import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);


  const testHandler = (event: MouseEvent) => {
    console.log(event.movementX + " from testHandler");
  }

  if (items.length === 0) return <h1>No item found</h1>;
  else {
    return (
      <Fragment>
        <h1>{heading}</h1>
        <ul className="list-group">
          {items.map((item, i) => (
            <li
              className={
                selectedIndex === i
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={(event) => {
                setSelectedIndex(i);
                onSelectItem(item);
                testHandler(event);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default ListGroup;
