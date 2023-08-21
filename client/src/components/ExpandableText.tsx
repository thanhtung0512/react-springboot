import React, { ReactNode } from "react";

interface Props {
  children: string;
  maxChar?: number;
  handleClick: () => void;
}

const ExpandableText = ({ children, maxChar = 100, handleClick }: Props) => {
  if (children.length < maxChar) return <p> {children}</p>;
  const text = children.substring(0, maxChar);
  return (
    <>
      <div>{text}</div>
      <button onClick={handleClick}>More</button>
    </>
  );
};

export default ExpandableText;
