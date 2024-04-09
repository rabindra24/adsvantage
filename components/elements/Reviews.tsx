"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "../custom/Wrapper";
import Autoplay from "embla-carousel-autoplay";

const Reviews = () => {
  return (
    <>
      <Wrapper className="px-10">
        <h3 className="text-primary text-md uppercase mb-2">Why Choose Us</h3>
        <h4 className="text-gray-200 font-bold md:text-4xl text-3xl  mb-10">
          Listen From our clients
        </h4>
        <Carousel className="w-full h-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="bg-transparent p-0">
                <div className="">
                  <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/844951057?h=691caf134d"
                    className="md:h-[500px] h-[300px] w-full "
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent text-gray-100 border-primary hover:bg-primary hover:text-gray-100" />
          <CarouselNext className="bg-transparent text-gray-100 border-primary hover:bg-primary hover:text-gray-100" />
        </Carousel>
      </Wrapper>
    </>
  );
};

export default Reviews;
