import { HowWeWork, Usp } from "@/constant";
import React from "react";
import CustomeButton from "../custom/CustomeButton";
import Image from "next/image";
import { arrow, rocket } from "@/public/icons";
import Wrapper from "../custom/Wrapper";
import GradientCircles from "./GradientCircles";

const OurWork = () => {
  return (
    <div className="relative" id="process">
      <Wrapper className=" z-10">
        <h2 className="text-primary text-lg md:text-md uppercase mb-5">
          {HowWeWork.title}
        </h2>
        <div className="flex md:flex-row flex-col gap-10 mb-20 pb-10  relative z-10">
          <h3 className="text-gray-200 font-bold text-3xl">
            {HowWeWork.leftContent}
          </h3>
          <div className="space-y-6 ">
            <p className="text-gray-300">{HowWeWork.rightContent}</p>
            <CustomeButton link="#contact" text="Contact Us" />
          </div>
        </div>
        <div className="flex  md:flex-row flex-col max-md:gap-10 relative z-10">
          {HowWeWork.process.map((item, idx) => (
            <div
              className="space-y-3 max-md:px-4 max-md:py-10  rounded-lg h-full w-full max-md:bg-gray-400  max-md:bg-clip-padding max-md:backdrop-filter max-md:backdrop-blur-lg max-md:bg-opacity-10 max-md:border max-md:border-primary "
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
              <h4 className="text-gray-200 font-bold text-xl capitalize md:pr-10">
                {item.title}
              </h4>
              <h5 className="text-gray-400  md:pr-5">{item.content}</h5>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center py-10">
          <CustomeButton
            link="#contact"
            text="Contact Us"
            classNames="mx-auto"
          />
        </div>

        <GradientCircles />
      </Wrapper>
    </div>
  );
};

export default OurWork;
