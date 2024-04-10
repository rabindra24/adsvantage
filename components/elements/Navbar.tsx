"use client";
import { logo } from "@/public/icons";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import CustomeButton from "../custom/CustomeButton";
import { NavElements } from "@/constant";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <Sheet>
          <div className="desktop flex justify-between items-center">
            <div>
              <Image src={logo} width={150} height={50} alt="Digital Agency" />
            </div>
            <div className="md:flex gap-10 hidden">
              <ul className="flex items-center gap-10">
                {NavElements.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="text-white text-lg cursor-pointer"
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
              <CustomeButton
                text="Get Started"
                link="https://wa.me/+917691961139"
              />
            </div>
            <SheetTrigger className="md:hidden">
              <MenuIcon className="h-8 w-8 text-white font-bold " />
            </SheetTrigger>
          </div>
          <SheetContent className="h-full w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 md:hidden">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src={logo}
                  alt="Adsvantage agency"
                  width={140}
                  height={50}
                />
              </SheetTitle>
              <SheetDescription>
                <ul className="flex text-left gap-10 mt-10 flex-col ">
                  {NavElements.map((item, idx) => (
                    <SheetTrigger key={idx} asChild className="text-white cursor-pointer">
                      <Link  href={item.link}>
                        {item.title}
                      </Link>
                    </SheetTrigger>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
