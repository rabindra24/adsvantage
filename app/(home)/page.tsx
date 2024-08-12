import Image from "next/image";
import { ellipse, line, logo, smallStar, star } from "@/public/icons";
import Navbar from "@/components/elements/Navbar";
import CustomeButton from "@/components/custom/CustomeButton";
import { Minus } from "lucide-react";
import BrandLogoSlider from "@/components/elements/BrandLogoSlider";
import { HowWeWork } from "@/constant";
import OurWork from "@/components/elements/OurWork";
import Capabalities from "@/components/elements/Capabalities";
import Benefits from "@/components/elements/Benefits";
import Reviews from "@/components/elements/Reviews";
import Contact from "@/components/elements/Contact";
import Footer from "@/components/elements/Footer";
import GridImages from "@/components/elements/GridImages";
import CompanyLogoSlider from "@/components/elements/CompanyLogoSlider";
import ProjectsCarosel from "@/components/elements/ProjectsCarosel";
import CaseStudie from "@/components/elements/CaseStudie";

export default function Home() {
  return (
    <div
      className="bg-[#1A1F25] min-h-screen p-5 overflow-x-hidden pb-2"
      data-scroll-container
    >
      <div className="w-full pt-20 pb-24 max-sm flex items-center justify-center flex-col space-y-5 relative top-0">
        <div className="w-[300px] h-[300px] bg-primary opacity-30 rounded-full blur-3xl absolute top-24 "></div>

        <h1 className="text-gray-100 font-bold lg:text-8xl md:text-6xl text-5xl  text-center relative z-10">
          Bringing your <br /> dream into{" "}
          <span className="text-primary">Reality</span>{" "}
          <Image
            src={star}
            alt="star"
            width={100}
            height={100}
            className="absolute md:h-24 md:w-24 h-12 w-12 animate-spin-slow  md:-right-10 -top-10"
          />
        </h1>
        <p className="text-gray-300 text-center  z-10">
          We increase revenue and ensure sustainable long-term growth for your
          business through <br /> powerful websites , Ads and quality content.
        </p>
        <CustomeButton
          link="https://wa.me/+917691961139 "
          text="Free Chatbot – Get Started!"
          classNames="px-12"
        />
        <Image
          src={star}
          alt="star"
          width={50}
          height={50}
          className="absolute h-5 w-5 animate-spin-slow md:right-40 right-10 bottom-0"
        />
        <Image
          src={star}
          alt="star"
          width={50}
          height={50}
          className="absolute h-5 w-5 animate-spin-slow  md:left-40 left-10 bottom-10"
        />
      </div>
      {/* Performance  */}
      <div className="space-y-5 ">
        <h2 className="flex items-center text-center justify-center space-x-2 text-gray-300">
          <Image
            src={line}
            width={100}
            height={2}
            alt="line"
            className="h-[.1rem] mr-2"
          />
          Our Performance is Certified By & Partner&apos;s with
          <Image
            src={line}
            width={100}
            height={2}
            alt="line"
            className="h-[.1rem] ml-2"
          />
        </h2>
        <BrandLogoSlider />
      </div>
      {/* <OurWork /> */}
      <Capabalities />
      <div className="space-y-5 mb-10">
        <h2 className="flex items-center text-center justify-center space-x-2 text-gray-300">
          <Image
            src={line}
            width={100}
            height={2}
            alt="line"
            className="h-[.1rem] mr-2"
          />
          We Worked With
          <Image
            src={line}
            width={100}
            height={2}
            alt="line"
            className="h-[.1rem] ml-2"
          />
        </h2>
        <CompanyLogoSlider />
      </div>

      <Benefits />
      <Reviews />
      <GridImages />
      <ProjectsCarosel />
      <CaseStudie />
      <Contact />
      {/* // Scroll  */}
    </div>
  );
}
