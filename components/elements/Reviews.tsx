"use client";
import React, { useRef } from "react";
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
import { ClientsReview } from "@/constant";

const Reviews = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000,  })
  );
  return (
    <div id="review">
      <Wrapper className="text-center">
        <h3 className="text-primary text-md uppercase mb-2">Why Choose Us</h3>
        <h4 className="text-gray-200 font-bold md:text-4xl text-3xl  mb-10">
          Listen From our clients
        </h4>
        <Carousel
          className="w-full h-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {ClientsReview.map((item, index) => (
              <CarouselItem key={index} className="bg-transparent p-0">
                <div className="">
                  <video
                    src="https://static.videezy.com/system/resources/previews/000/000/168/original/Record.mp4"
                    className="md:h-[500px] h-auto w-full "
                    controls
                    poster="https://reviewzone.media/wp-content/uploads/2022/12/Top-Product-Review-Channels-on-YouTube-1.jpg"
                  ></video>
                </div>
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

export default Reviews;
