import { HowWeWork } from "@/constant";
import React from "react";
import CustomeButton from "../custom/CustomeButton";
import Image from "next/image";
import { arrow, rocket } from "@/public/icons";
import Wrapper from "../custom/Wrapper";
import GradientCircles from "./GradientCircles";

const OurWork = () => {
  return (
    <div className="relative">
      <Wrapper className=" z-10">
        <h3 className="text-primary text-lg md:text-md uppercase mb-5">
          {HowWeWork.title}
        </h3>
        <div className="flex md:flex-row flex-col gap-10 mb-20 pb-10  relative z-10">
          <h4 className="text-gray-200 font-bold text-3xl">
            {HowWeWork.leftContent}
          </h4>
          <div className="space-y-6 ">
            <h5 className="text-gray-300">{HowWeWork.rightContent}</h5>
            <CustomeButton text="See Pricing" />
          </div>
        </div>
        <div className="flex  md:flex-row flex-col max-md:gap-10 ">
          {HowWeWork.process.map((item, idx) => (
            <div
              className="space-y-3 max-md:px-4 max-md:py-10  rounded-lg h-full w-full max-md:bg-gray-400  max-md:bg-clip-padding max-md:backdrop-filter max-md:backdrop-blur-lg max-md:bg-opacity-10 max-md:border max-md:border-gray-100"
              key={idx}
            >
              <div className="flex items-center ">
                <div className="border-2 border-primary w-fit  rounded-full p-5">
                  <Image
                    src={item.image}
                    alt="rocket"
                    width={200}
                    height={200}
                    className="h-8 w-8"
                  />
                </div>

                {idx + 1 !== HowWeWork.process.length && (
                  <Image
                    src={arrow}
                    alt="rocket"
                    width={200}
                    height={50}
                    className="w-[80%] h-3 hidden md:block"
                  />
                )}
              </div>
              <h3 className="text-gray-200 font-bold text-xl capitalize">
                {item.title}
              </h3>
              <h5 className="text-gray-400  md:pr-5">{item.content}</h5>
            </div>
          ))}
        </div>
      </Wrapper>
      <GradientCircles />
    </div>
  );
};

export default OurWork;
