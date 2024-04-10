import React from "react";
import Wrapper from "../custom/Wrapper";
import Image from "next/image";
import { logo } from "@/public/icons";
import { Contact, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex justify-between md:flex-row flex-col gap-5">
        <div>
          <Image src={logo} width={200} height={50} alt="logo" />
          <p className="max-w-[400px]">
            AdsVantage - the leading digital agency based in the India, working
            with top-tier clients, from start-ups to enterprises.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <Mail />
            <p>Mahato.rabindra.rm@gmail.com</p>
          </div>
          <div className="flex gap-4 mb-5">
            <Contact />
            <p>+91 7691961139</p>
          </div>
          <div className="flex gap-4">
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <hr className="text-primary bg-primary mb-2 mt-5" />
        <p>© {new Date().getFullYear()} AdsVantage - All Right Reserved</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
