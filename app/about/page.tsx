import CustomeButton from "@/components/custom/CustomeButton";
import Wrapper from "@/components/custom/Wrapper";
import GradientCircles from "@/components/elements/GradientCircles";
import { Badge } from "@/components/ui/badge";
import { OurTeam, Services } from "@/constant";
import Image from "next/image";
import React from "react";

interface tags {
  title: string;
}

const UsersCard = ({
  image,
  title,
  tags,
  content,
}: {
  image: any;
  title: string;
  tags?: tags[] | undefined;
  content: string;
}) => {
  return (
    <div className="max-w-[350px] mx-auto space-y-3 border border-primary p-3 rounded-lg backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 pb-5">
      <Image
        src={image}
        alt={title}
        width={432}
        height={432}
        className="w-[350px] max-h-[250px] mx-auto rounded-lg object-cover"
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

const page = () => {
  return (
    <div className="dark bg-[#1A1F25] text-foreground min-h-[100dvh] flex flex-col overflow-x-hidden" data-scroll-container>
      <Wrapper>
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-5 font-bold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground text-left text-lg sm:text-xl">
            At Adsvantage, we&apos;re a team of three friends united by a shared
            passion for digital innovation. Our journey began with a vision to
            provide comprehensive digital solutions at the most affordable
            prices. Our CEO, CMO, and founder leads the charge in crafting
            compelling marketing strategies. Our tech-savvy web developer, also
            a co-founder, ensures that every digital project is executed
            flawlessly. Completing our trio is our talented video editor, who
            brings stories to life through engaging visuals.
          </p>
          <p className="mt-4 max-w-3xl text-muted-foreground text-left text-lg sm:text-xl">
            Together, we are dedicated to helping businesses, especially in the
            e-commerce and real estate sectors, thrive in the digital world. We
            offer a full spectrum of services, including performance marketing,
            website development, and video editing, tailored to meet your unique
            needs. At Adsvantage, we don&apos;t just deliver digital solutions; we
            build lasting partnerships, driven by our commitment to quality,
            creativity, and affordability.
          </p>
        </main>
        <section className="bg-[#1A1F25] ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-10 relative z-10 ">
              {OurTeam?.map((item, idx) => (
                <UsersCard
                  image={item.image}
                  title={item.title}
                  tags={item.tags}
                  content={item.content}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="w-full flex items-center justify-center py-10">
          <CustomeButton
            link="/#contact"
            text="Let's Fix your problem"
            classNames="mx-auto text-white"
          />
        </div>

        <GradientCircles />
      </Wrapper>
    </div>
  );
};

export default page;
