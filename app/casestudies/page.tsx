import Link from "next/link";
import React from "react";

const CaseStudies = () => {
  const arr = [1, 1, 1, 1, 1, 1];
  return (
    <section className=" w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Latest Blog Posts
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay up-to-date with the latest news and insights from our blog.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arr.map((item, idx) => (
            <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md" key={idx}>
              <Link href="/casestudies/1" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">Read more</span>
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  Unlocking the Power of Generative AI
                </h3>
                <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
                  <div>John Doe</div>
                  <div className="flex items-center space-x-1">
                    <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                    <div>May 1, 2023</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Discover how generative AI is transforming industries and
                  empowering businesses to innovate like never before.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
