"use client";
import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Wrapper from "../custom/Wrapper";
import Autoplay from "embla-carousel-autoplay";
import { ClientsReview, projectsArrar } from "@/constant";
import Image from "next/image";

const ProjectsCarosel = () => {
  const plugin = useRef(Autoplay({ delay: 2000,stopOnInteraction : false }));
  return (
    <div id="projects">
      <Wrapper className="text-center">
        <h3 className="text-primary  text-md uppercase mb-2">Why Choose Us</h3>
        <h4 className="text-gray-200 font-bold md:text-4xl text-3xl  mb-10">
          Projects That Define Us
        </h4>
        <Carousel
          className="w-full h-full"
          plugins={[plugin.current]}
          opts={{loop : true}}
          aria-disabled
        >
          <CarouselContent className="gap-5">
            {projectsArrar.map((item, index) => (
              <CarouselItem
                key={index}
                className="bg-transparent p-0 md:basis-1/2 lg:basis-1/3  max-h-[300px]"
              >
                  <Image
                    src={item.image}
                    alt="banner.png"
                    width="1000"
                    height="800"
                    className="w-full h-full object-cover object-top"
                  />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent text-gray-100 border-primary hover:bg-primary hover:text-gray-100 max-sm:hidden" />
          <CarouselNext className="bg-transparent text-gray-100 border-primary hover:bg-primary hover:text-gray-100 max-sm:hidden" />
        </Carousel>
      </Wrapper>
    </div>
  );
};

export default ProjectsCarosel;
