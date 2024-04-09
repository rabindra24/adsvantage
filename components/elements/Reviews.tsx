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
        <h4 className="text-gray-200 font-bold md:text-5xl text-3xl  mb-10">
          Listen From our clients
        </h4>
        <Carousel
          className="w-full h-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="bg-transparent p-0">
                <div className="">
                  <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                    <DialogContent className="bg-transparent border-none">
                      <iframe
                        className="md:h-[500px] md:w-[600px] h-[300px] w-full "
                        src="https://www.youtube.com/embed/2lNjK9IwGlI?si=IXWYVijWPeNvriN1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </DialogContent>
                  </Dialog>
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
