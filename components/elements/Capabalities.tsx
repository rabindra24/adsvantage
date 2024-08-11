import React, { ReactNode } from "react";
import Wrapper from "../custom/Wrapper";
import GradientCircles from "./GradientCircles";
import { Services } from "@/constant";
import Image from "next/image";
import CustomeButton from "../custom/CustomeButton";
import { Badge } from "@/components/ui/badge";

interface tags {
  title: string;
}

const CapabalitiesCard = ({
  image,
  title,
  tags,
  content,
}: {
  image: any;
  title: string;
  tags?: tags[];
  content: string;
}) => {
  return (
    <div className="max-w-[350px] mx-auto space-y-3 border border-primary p-3 rounded-lg backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 pb-5">
      <Image
        src={image}
        alt={title}
        width={432}
        height={432}
        className="w-[350px] mx-auto rounded-lg"
      />
      <h3 className="text-gray-200 text-2xl font-bold">{title}</h3>
      <p className="text-gray-300 text-sm capitalize">{content}</p>
      <div className="gap-2 flex mt-2">
        {tags?.map((item, idx) => (
          <Badge
            variant="outline"
            className="rounded-sm border-primary text-gray-200 p-2 capitalize"
            key={idx}
          >
            {item.title}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const Capabalities = () => {
  return (
    <div className="relative  " id="services">
      <Wrapper className="relative z-10">
        <h2 className="uppercase text-primary mb-2 md:text-center text-xl">
          Our capabilities
        </h2>
        <h3 className="md:text-5xl font-bold text-4xl capitalize md:text-center text-gray-200 mb-10">
          We can help you with..
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-10 relative z-10 ">
          {Services.map((item, idx) => (
            <CapabalitiesCard
              image={item.image}
              title={item.title}
              tags={item.tags}
              content={item.content}
              key={idx}
            />
          ))}
        </div>
        <GradientCircles />
      </Wrapper>
    </div>
  );
};

export default Capabalities;
