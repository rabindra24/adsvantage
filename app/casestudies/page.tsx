import Wrapper from "@/components/custom/Wrapper";
import GradientCircles from "@/components/elements/GradientCircles";
import { CaseStudy } from "@/constant";
import Link from "next/link";
import React from "react";

const CaseStudies = () => {
  return (
    <section className=" w-full relative py-12 md:py-24 lg:py-32 z-10 overflow-x-hidden" data-scroll-container>
      <Wrapper className=" ">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
                Case Studies
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our case studies to see how we&apos;ve transformed businesses with innovative digital marketing strategies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CaseStudy.map((item, idx) => (
              <div
                className="group relative overflow-hidden rounded-lg border border-primary p-3  backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-10 pb-5"
                key={idx}
              >
                <Link
                  href={`/casestudies/${item.id}`}
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">Read more</span>
                </Link>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground none">
                    <div>{item.author}</div>
                    <div className="flex items-center space-x-1">
                      <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <div>{item.date}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {item.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <GradientCircles />
      </Wrapper>
    </section>
  );
};

export default CaseStudies;
