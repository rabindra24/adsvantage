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
    <>
      {link ? (
        <Link href={link}>
          <Button
            className={` border-2 border-primary bg-transparent px-10 py-5 ${classNames}`}
          >
            {text}
          </Button>
        </Link>
      ) : (
        <Button
          className={` border-2 border-primary bg-transparent px-10 py-5 ${classNames}`}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default CustomeButton;
