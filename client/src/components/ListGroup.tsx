import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

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
              onClick={() => {
                setSelectedIndex(i);
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
