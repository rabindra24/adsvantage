import { BenefitsCardsData, BenefitsData } from "@/constant";
import React from "react";
import CustomeButton from "../custom/CustomeButton";
import Wrapper from "../custom/Wrapper";
import GradientCircles from "./GradientCircles";

const Benefits = () => {
  return (
    <div id="benefits">
      <Wrapper>
        <h3 className="text-primary text-lg md:text-md uppercase mb-5">
          {BenefitsData.subtitle}
        </h3>
        <div className="flex md:flex-row flex-col gap-10 mb-20  relative z-10">
          <h4 className="text-gray-200 font-bold text-3xl">
            {BenefitsData.title}
          </h4>
          <div className="space-y-6 ">
            <h5 className="text-gray-300 mb-3">{BenefitsData.content}</h5>
            <CustomeButton link="#contact" text="Contact Us" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 relative z-10">
          {BenefitsCardsData.map((item, idx) => (
            <div
              className="space-y-3 rounded-lg h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-primary p-4"
              key={idx}
            >
              {item.icons}
              <h3 className="font-bold text-gray-100 text-xl">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.content}</p>
            </div>
          ))}
        </div>
        <GradientCircles />
      </Wrapper>{" "}
    </div>
  );
};

export default Benefits;
