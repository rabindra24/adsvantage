"use client";
import { Technologies } from "@/constant";
import { wordpress } from "@/public/icons";
import Image from "next/image";
import React, { useEffect } from "react";
import Wrapper from "../custom/Wrapper";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const BrandLogoSlider = () => {
  // const { toast } = useToast();
  // useEffect(() => {
  //   toast({
  //     title: "Scheduled: Catch up ",
  //     description: "Friday, February 10, 2023 at 5:57 PM",
  //     action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
  //   });
  // }, []);

  return (
    <Wrapper>
  
      <div
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] relative z-10 gap-5"
      >
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll space-x-6 ">
          {Technologies.map((item, idx) => (
            <div className="flex gap-5 flex-row items-center " key={idx}>
              <Image
                src={item.image}
                width={40}
                height={40}
                alt={item.title}
                className="grayscale-0"
              />
              <h3 className="text-white font-bold ">{item.title}</h3>
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll space-x-6"
          aria-hidden="true"
        >
          {Technologies.map((item, idx) => (
            <div className="flex gap-5 flex-row items-center " key={idx}>
              <Image
                src={item.image}
                width={40}
                height={40}
                alt={item.title}
                className="grayscale-0"
              />
              <h3 className="text-white font-bold ">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* <div className=" w-full h-full p-3 absolute top-0 left-0 rounded-lg"></div> */}
    </Wrapper>
  );
};

export default BrandLogoSlider;
