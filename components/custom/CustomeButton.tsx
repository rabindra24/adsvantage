import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CustomeButton = ({
  text,
  link,
  classNames,
  type,
}: {
  text: string;
  link?: string;
  classNames?: string;
  type?: string;
}) => {
  return (
    <Button
      className={` border-2 border-primary bg-transparent px-10 py-5 ${classNames}`}
    >
      {link ? <Link href={link}>{text}</Link> : text}
    </Button>
  );
};

export default CustomeButton;
