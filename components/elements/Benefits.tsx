import { BenefitsCardsData, BenefitsData } from "@/constant";
import React from "react";
import CustomeButton from "../custom/CustomeButton";
import Wrapper from "../custom/Wrapper";

const Benefits = () => {
  return (
    <Wrapper>
      <h3 className="text-primary text-lg md:text-md uppercase mb-5">
        {BenefitsData.subtitle}
      </h3>
      <div className="flex md:flex-row flex-col gap-10 mb-20  relative z-10">
        <h4 className="text-gray-200 font-bold text-3xl">
          {BenefitsData.title}
        </h4>
        <div className="space-y-6 ">
          <h5 className="text-gray-300">{BenefitsData.content}</h5>
          <CustomeButton text="See Pricing" />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {BenefitsCardsData.map((item, idx) => (
          <div className="space-y-3" key={idx}>
            {item.icons}
            <h3 className="font-bold text-gray-100 text-xl">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Benefits;
