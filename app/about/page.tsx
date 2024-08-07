import Wrapper from "@/components/custom/Wrapper";
import { CapabalitiesCard } from "@/components/elements/Capabalities";
import { OurTeam, Services } from "@/constant";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="dark bg-[#1A1F25] text-foreground min-h-[100dvh] flex flex-col">
      <Wrapper>
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground text-lg sm:text-xl">
            At our company, we are passionate about creating innovative
            solutions that empower our clients to achieve their goals. With a
            talented team of experts, we strive to deliver exceptional results
            and build lasting partnerships.
          </p>
        </main>
        <section className="bg-[#1A1F25] ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-10 relative z-10 ">
              {OurTeam?.map((item, idx) => (
                <CapabalitiesCard
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
      </Wrapper>
    </div>
  );
};

export default page;
