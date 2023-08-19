import { Fragment, useState } from "react";
import { MouseEvent } from "react";

import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

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
  };

  if (items.length === 0) return <h1>No item found</h1>;
  else {
    return (
      <Fragment>
        <h1>{heading}</h1>
        <List>
          {items.map((item, i) => (
            <ListItem
              active={i === selectedIndex}
              key={item}
              onClick={(event) => {
                setSelectedIndex(i);
                onSelectItem(item);
                testHandler(event);
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </Fragment>
    );
  }
}

export default ListGroup;
