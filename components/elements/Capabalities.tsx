import React from "react";
import Wrapper from "../custom/Wrapper";
import GradientCircles from "./GradientCircles";

const Capabalities = () => {
  return (
    <div className="relative py-10">
      <Wrapper className="relative">
        <h2 className="uppercase text-primary mb-2 md:text-center text-xl">
          Our capabilities
        </h2>
        <h3 className="md:text-5xl font-bold text-4xl capitalize md:text-center text-gray-200">
          We can help you with..
        </h3>
      </Wrapper>
      {/* <GradientCircles /> */}
    </div>
  );
};

export default Capabalities;
