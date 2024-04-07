import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className ?: string;
}) => {
  return (
    <div className={`${className} max-w-[1050px] mx-auto py-10 relative top-0  rounded-lg text-white `}>
      {children}
    </div>
  );
};

export default Wrapper;
