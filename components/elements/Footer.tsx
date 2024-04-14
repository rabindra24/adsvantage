import React from "react";
import Wrapper from "../custom/Wrapper";
import Image from "next/image";
import { logo } from "@/public/icons";
import { Contact, Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex justify-between md:flex-row flex-col gap-5">
        <div>
          <Link href="/">
            <Image src={logo} width={200} height={50} alt="logo" />
          </Link>
          <p className="max-w-[400px]">
            AdsVantage - the leading digital agency based in the India, working
            with top-tier clients, from start-ups to enterprises.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <Mail />
            <a href="mailto:mahato.rabindra.rm@gmail.com">
              Mahato.rabindra.rm@gmail.com
            </a>
          </div>
          <div className="flex gap-4 mb-5">
            <Contact />
            <a href="tel:7691961139">+91 7691961139</a>
          </div>
          <div className="flex gap-4">
            {/* <a href="">
              <Facebook />
            </a> */}
            <a href="https://www.instagram.com/adsvantage.in/">
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
