import React from "react";
import { Button } from "../ui/button";

const CustomeButton = ({
  text,
  link,
  classNames,
}: {
  text: string;
  link?: string;
  classNames?: string;
}) => {
  return (
    <Button
      className={` border-2 border-primary bg-transparent px-10 py-5 ${classNames}`}
    >
      {text}
    </Button>
  );
};

export default CustomeButton;